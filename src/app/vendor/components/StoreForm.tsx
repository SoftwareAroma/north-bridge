
import { Label, TextInput } from 'flowbite-react';
// import { HiMail } from 'react-icons/hi';

const StoreForm = (props: any) => {
    // const { isEdditing = false } = props;
    return (
        <div className="max-w-lg w-full">
            <div className="w-full flex flex-col items-start">
                <Label htmlFor="store_name" value="Store Name" />
                <TextInput
                    required
                    id="store_name"
                    type="text"
                    // icon={HiMail}
                    placeholder="Name"
                    className='w-full'
                />
            </div>
        </div>
    );
}

export default StoreForm;
