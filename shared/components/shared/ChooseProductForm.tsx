import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Title} from "@/shared/components/shared/index";
import {Button} from "@/shared/components/ui";
import {RussianRuble, ShoppingCartIcon} from "lucide-react";

interface Props {
    imageUrl: string;
    name: string;
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: FC<Props> = ({name, imageUrl, onClickAdd, className}: Props) => {
    const textDetails = '30 см, традиционное тесто 30';
    const totalPrice = 350;

    return (
        <div className={cn('flex flex-1', className)}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img
                    src={imageUrl}
                    alt={name}
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7 flex flex-col justify-between">
                <div>
                    <Title text={name} size={"md"} className="font-extrabold mb-1"/>

                    <p className="text-gray-400">{textDetails}</p>
                </div>

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    <ShoppingCartIcon className="mr-3"/> {totalPrice} <RussianRuble size={18}/>
                </Button>
            </div>
        </div>
    );
};