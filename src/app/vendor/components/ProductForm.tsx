
import { Label, TextInput } from 'flowbite-react';
// import { HiMail } from 'react-icons/hi';

const ProductForm = (props: any) => {
    // const { isEdditing = false } = props;
    return (
        <div className="max-w-lg w-full">
            <div className="w-full flex flex-col items-start">
                <Label htmlFor="product_title" value="Product Title" />
                <TextInput
                    required
                    id="product_title"
                    type="text"
                    // icon={HiMail}
                    placeholder="Product ABC"
                    className='w-full'
                />
            </div>
        </div>
    );
}

export default ProductForm;
