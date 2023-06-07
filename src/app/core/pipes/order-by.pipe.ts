import {Pipe, PipeTransform} from '@angular/core'
import { Product } from '../models/product.model';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
    transform(value: Product[], ...args: any[]): Product[] {
        if(!Array.isArray(value)){
            return value;
        }

        const [order = 'asc'] = args;
        return value.sort((a, b) => {
            const compare = a.nombre.localeCompare(b.nombre);
            return order === 'asc' ? compare   :  -compare;
        })
    }
    
}