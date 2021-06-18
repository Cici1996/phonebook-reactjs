import { Avatar} from "@material-ui/core"
import { useEffect, useState } from "react"
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import axios from "axios";
import TextField from '@material-ui/core/TextField';

const AddContact = () => {

    const [profileImage, setprofileImage] = useState('')

    useEffect(() => {

    }, [])

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setprofileImage(URL.createObjectURL(event.target.files[0]))
        }
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const form = new FormData();
        form.append('phone', data.phone);
        form.append('name', data.name);
        form.append('address', data.address);
        form.append('photo', data.file[0]);


        axios.post('https://address-book-exp-api.herokuapp.com/users', form)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <div style={{ marginBottom: 10 }}>
                {profileImage && <Avatar src={profileImage} style={{ width: '100px', height: '100px', alignItems: "center" }} />}
                {!profileImage && <Avatar style={{ width: '100px', height: '100px', alignItems: "center" }} />}

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: 10 }}>
                    <TextField
                        fullWidth={true}
                        {...register("name")}
                        label="Name"
                        variant="outlined"
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <TextField
                        fullWidth={true}
                        {...register("phone")}
                        label="Phone"
                        variant="outlined"
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <TextField
                        fullWidth={true}
                        {...register("address")}
                        label="Address"
                        variant="outlined"
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <input type="file" className="form-control" {...register("file")} onChange={(e) => onImageChange(e)} placeholder="Phote" />
                </div>
                <div style={{ textAlign: "center" }}>
                    <Button type="submit" variant="outlined" color="secondary">
                        Add Contact
                    </Button>
                </div>
            </form>
        </>
    )
}

export default AddContact