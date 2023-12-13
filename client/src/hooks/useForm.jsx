import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postActivitie } from '../redux/action';



export const useForm = ( initialForm, validateForm ) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();


    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name] : value,
        });
    };

    const handleBlur = (event) => {
        handleChange(event);
        setErrors(validateForm(form));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            dispatch(postActivitie(form));
            alert('Activity created');
            setForm(initialForm);

        } else {
            return;
        }
    };

    const handleDelete = (idCountry) => {
        setForm({
            ...form,
            id: form.id.filter( id => id !== idCountry)
        });
    };

    const handleSelect = (event) => {
        const { value } = event.target;
        setForm({
            ...form,
            id: [...form.id, value]
        })
    }

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleDelete,
        handleSelect
    }
}