import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import CategoryClothes from '../models/CategoryClothes';

export default {
  async index(request: Request, response: Response) {
    const userRepository = getRepository(CategoryClothes);
    const categoryClothes = await userRepository.find();

    return response.json(categoryClothes);
  },

  async create(request: Request, response: Response) {
    const {
    categoryName,
    productName,
    productDescription,
    productSizes,
    productColors,
    productPrice
  } = request.body;

  const userRepository = getRepository(CategoryClothes);
  const categoryClothes = userRepository.create({
    categoryName,
    productName,
    productDescription,
    productSizes,
    productColors,
    productPrice
  });

  await userRepository.save(categoryClothes);
  return response.status(201).json(categoryClothes);
  }
};