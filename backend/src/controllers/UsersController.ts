import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

export default {
  async index(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return response.json(users);
  },

  async create(request: Request, response: Response) {
    const {
    completeName,
    phoneNumber,
    email,
    password
  } = request.body;

  const userRepository = getRepository(User);
  const user = userRepository.create({
    completeName,
    phoneNumber,
    email,
    password
  });

  await userRepository.save(user);
  return response.status(201).json(user);
  }
};