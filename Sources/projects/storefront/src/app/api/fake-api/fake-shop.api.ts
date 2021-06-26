import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { ShopCategory } from '../../interfaces/category';
import { Product } from '../../interfaces/product';
import { Brand } from '../../interfaces/brand';
import { ProductsList, ReviewsList } from '../../interfaces/list';
import { Review } from '../../interfaces/review';
import { Order } from '../../interfaces/order';
import {
    AddProductReviewData,
    CheckoutData,
    GetBrandsOptions,
    GetCategoriesOptions,
    GetCategoryBySlugOptions,
    GetProductReviewsOptions,
    GetProductsListOptions,
    GetSearchSuggestionsOptions,
    GetSearchSuggestionsResult,
    ShopApi,
} from '../base';
import {
    addProductReview,
    checkout,
    getCategories,
    getCategoryBySlug,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductAnalogs,
    getProductBySlug,
    getProductReviews,
    getProductsList,
    getRelatedProducts,
    getSearchSuggestions,
    getSpecialOffers,
    getTopRatedProducts,
} from '../../../fake-server/endpoints';
import { getBrands } from '../../../fake-server/endpoints/brands';
import { HeaderService } from '../../../app/services/header.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductAttributesDef, ProductDef } from '../../../../src/fake-server/interfaces/product-def';

import { products as dbProducts } from '../../../fake-server/database/products';


import { AbstractFilterBuilder } from '../../../fake-server/filters/abstract-filter-builder';
import { CategoryFilterBuilder } from '../../../fake-server/filters/category-filter-builder';
import { VehicleFilterBuilder } from '../../../fake-server/filters/vehicle-filter-builder';
import { RangeFilterBuilder } from '../../../fake-server/filters/range-filter-builder';
import { CheckFilterBuilder } from '../../../fake-server/filters/check-filter-builder';
import { RadioFilterBuilder } from '../../../fake-server/filters/radio-filter-builder';
import { RatingFilterBuilder } from '../../../fake-server/filters/rating-filter-builder';
import { ColorFilterBuilder } from '../../../fake-server/filters/color-filter-builder';
import { clone, delayResponse } from '../../../fake-server/utils';

let lastId = 0;
@Injectable()
export class FakeShopApi extends ShopApi {
globalVar:any[];
outputArraytwo :any;

    constructor (headerService:HeaderService, http:HttpClient){
        super(headerService, http);
    }



    
    getCategoryBySlug(slug: string, options?: GetCategoryBySlugOptions): Observable<ShopCategory> {
        console.log("1");
        return getCategoryBySlug(slug, options);
    }

    getCategories(options?: GetCategoriesOptions): Observable<ShopCategory[]> {
        return getCategories(options);
    }

    getBrands(options?: GetBrandsOptions): Observable<Brand[]> {
        return getBrands(options);
    }

    getProductsList(options?: GetProductsListOptions): Observable<ProductsList> {
        return getProductsList(options);
    }

    getProductBySlug(slug: string): Observable<Product> {
        return getProductBySlug(slug);
    }

    getProductReviews(productId: number, options?: GetProductReviewsOptions): Observable<ReviewsList> {
        return getProductReviews(productId, options);
    }

    addProductReview(productId: number, data: AddProductReviewData): Observable<Review> {
        return addProductReview(productId, data);
    }

    getProductAnalogs(productId: number): Observable<Product[]> {
        return getProductAnalogs(productId);
    }

    getRelatedProducts(productId: number, limit: number): Observable<Product[]> {
        return getRelatedProducts(productId, limit);
    }

    // getFeaturedProducts(categorySlug: string, limit: number): Observable<Product[]> {
    //     console.log("latestproduct");
    //     const dbProducts = this.headerService.viewAllProduct().subscribe(data => {
    //         console.log("data1");
    //         console.log(data);
    //         console.log("data2");
    //         return data;
    //     });
    //     console.log(dbProducts);
    //     return getFeaturedProducts(categorySlug, limit);
    // }

    //MY code_below//

    getFeaturedProducts(categorySlug: string, limit: number): Observable<any> {

    let productDataNew :any;
    var outputArray :any = [] ;
  
    var products: any[] = [];


    function makeProducts(defs: any[]): any[] {
        console.log({defs});
        return defs.map(def => {
            return {
                id: ++lastId,
                name: def.name,
                description: `
                    <p>
                        Lorem ipsum dolor sit amet, ................description
                    </p>
                `,
                slug: def.slug,
                sku: def.sku,
                // partNumber: 'BDX-750Z370-S',
                stock: 'in-stock',
                price: def.price,
                compareAtPrice: def.compareAtPrice || null,
                images: def.images.slice(0),
                //badges,
                rating: def.rating,
                reviews: def.reviews,
                availability: def.availability,
                compatibility: def.compatibility || 'all',
                //brand,
                //categories,
                customFields: {},
            };
        });
    }


        function makeProductsArray(Products$: any): any {
        console.log({Products$});
        return Products$.map(arraydef => {
            return {
                name: arraydef.Name,
                slug: 'brandix-spark-plug-kit-asr-400',
                sku: arraydef.sku,
                price: arraydef.price,
                images: [
                    'assets/images/products/product-1-1.jpg',
                    'assets/images/products/product-1-2.jpg',
                ],
                badges: ['sale', 'new', 'hot'],
                rating: 4,
                reviews: 3,
                availability: 'in-stock',
                compatibility: [1, 2],
                // attributes: {
                //     Color: 'White',
                // },
            };
        });
    }



  // function getCustomerOrderId(){
  //   return this.http.get("http://127.0.0.1:8000/api/products/").map(
  //             (response: Response) => {
  //               this.anotherVariable = response
  //             });
  //           }



  //   function getProducts(): Observable {
  //   return this.http.get(this.apiurl, this.httpOptions)
  //   .pipe(
  //     tap(data => {
  //       // debug error here
  //       console.log(data);
  //     }),
  //     catchError(this.handleError)
  //   );
  // }


    
        this.headerService.viewAllProduct().subscribe(res => {

            this.globalVar = res.Products.map(DataNew => {
                return DataNew;
            });

            // res.Products.forEach((item) => {
            //     productDataNew.push(item);
            // });

            //productDataNew = res.Products;
            // console.log({productDataNew});
            // //const products: any[] = makeProductsArray(res.Products);
            // outputArray.push(makeProductsArray(productDataNew));


            // console.log("======");
            // console.log(res.Products);
            // console.log("======");


            // res.Products.forEach((item) => {
            //     console.log({item});
            //     //outputArray.push(makeProductsArray(item));
            // });
            // console.log({outputArray});
            console.log("2222222");
            console.log(this.globalVar);
            console.log("22222222");
            outputArray = makeProductsArray(this.globalVar);
            console.log("1111111");
            console.log({outputArray});
            console.log("1111111");

            this.outputArraytwo = makeProducts(outputArray);

            console.log("0000000");
            console.log(this.outputArraytwo);
            console.log("0000000");


            limit = limit || 8;
        switch (categorySlug) {
            case 'tires-wheels':
            case 'power-tools': limit += 5; break;
            case 'interior-parts':
            case 'hand-tools': limit += 10; break;
            case 'engine-drivetrain':
            case 'plumbing': limit += 15; break;
        }
        [...this.outputArraytwo.slice(limit), ...this.outputArraytwo.slice(8, limit)];


        
        });

                    console.log("0000000");
            console.log(this.outputArraytwo);
            console.log("0000000");
        

        return this.outputArraytwo;

//             console.log("333333333");
//             console.log({productDataNew});
//             console.log("333333333");

//         outputArray = makeProducts(productDataNew);
//                     console.log("444444444");
//             console.log({outputArray});
//             console.log("444444444");
        
        
//         //console.log({outputArray});
//      //const productsDef: ProductDef[] = outputArraytwo;
//     const productsDef: ProductDef[] = [
//         {
//             name: 'Brandix Spark Plug Kit ASR-400',
//             slug: 'brandix-spark-plug-kit-asr-400',
//             sku: '140-10440-B',
//             price: 19,
//             images: [
//                 'assets/images/products/product-1-1.jpg',
//                 'assets/images/products/product-1-2.jpg',
//             ],
//             badges: ['sale', 'new', 'hot'],
//             rating: 4,
//             reviews: 3,
//             availability: 'in-stock',
//             compatibility: [1, 2],
//             // attributes: {
//             //     Color: 'White',
//             // },
//         },
//         {
//             name: 'Brandix Brake Kit BDX-750Z370-S',
//             slug: 'brandix-brake-kit-bdx-750z370-s',
//             sku: '573-23743-C',
//             price: 224,
//             images: [
//                 'assets/images/products/product-2-1.jpg',
//                 'assets/images/products/product-2-2.jpg',
//             ],
//             rating: 5,
//             reviews: 22,
//             availability: 'in-stock',
//             compatibility: [1],
//             // attributes: {
//             //     Color: 'Silver',
//             // },
//         },
//     ];

// console.log({outputArray});
// const products: any[] = makeProducts(productsDef);

//     console.log({products});
//     //this code stops here used to repace the product.ts fack-server/endpint need//   
//         limit = limit || 8;
//         switch (categorySlug) {
//             case 'tires-wheels':
//             case 'power-tools': limit += 5; break;
//             case 'interior-parts':
//             case 'hand-tools': limit += 10; break;
//             case 'engine-drivetrain':
//             case 'plumbing': limit += 15; break;
//         }
//         [...productsDef.slice(limit), ...productsDef.slice(8, limit)];


//         return delayResponse(of(clone(productsDef)), 1000);

    //return getFeaturedProducts(categorySlug, limit);
    //this code stops here used to repace the product.ts fack-server/endpint need//

    }

    //MY code_below//

    getPopularProducts(categorySlug: string, limit: number): Observable<Product[]> {
        return getPopularProducts(categorySlug, limit);
    }

    getTopRatedProducts(categorySlug: string, limit: number): Observable<Product[]> {
        return getTopRatedProducts(categorySlug, limit);
    }

    getSpecialOffers(limit: number): Observable<Product[]> {
        return getSpecialOffers(limit);
    }

    getLatestProducts(limit: number): Observable<Product[]> {
        return getLatestProducts(limit);
    }

    getSearchSuggestions(query: string, options?: GetSearchSuggestionsOptions): Observable<GetSearchSuggestionsResult> {
        return getSearchSuggestions(query, options);
    }

    checkout(data: CheckoutData): Observable<Order> {
        return checkout(data);
    }
}