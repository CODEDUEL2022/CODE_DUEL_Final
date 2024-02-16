import { Injectable } from '@nestjs/common';
import { GetCardInterface } from './interfaces/cards.interfaces';
import { resolve } from 'path';

@Injectable()
export class CardsService {
    findOne(id: number): Promise<GetCardInterface> {
        const testValue: GetCardInterface = {
            name: "testCard",
            value: 100,
            type: 'ATTACK',
            path: 'test'
        }
        return new Promise(resolve => {
            resolve(testValue)
        })
    }
    findAll(): Promise<GetCardInterface[]>{
        const testValue: GetCardInterface = {
            name: "testCard",
            value: 100,
            type: 'ATTACK',
            path: 'test'
        }
        return new Promise(resolve => {
            resolve([testValue])
        })
    }
}