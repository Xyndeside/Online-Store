'use client';

import {FC, useEffect, useRef} from "react";
import {Title} from "@/components/shared/Title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/ProductCard";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store/category";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    listClassName?: string;
    className?: string;
}

export const ProductsGroupList: FC<Props> = ({ title, items, categoryId, listClassName, className }: Props) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = useRef(null);
    // @ts-ignore
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};