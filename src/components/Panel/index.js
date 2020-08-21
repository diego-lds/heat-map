import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';

const Panel = ({
    onSubmit,
    latLng,
}) => {
    const { register, handleSubmit, errors, reset } = useForm();

    return (
        <div className='panel-container'>
            <h2>Cadastro de moradores</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='Cep'
                    name='zipCode'
                    ref={register({
                        required: 'CEP obrigatório',
                        minLength: {
                            value: 8,
                            message: 'CEP precisa ter 8 números'
                        },
                        pattern: {
                            value: /^\d{5}-?\d{3}$/,
                            message: 'Formato de CEP inválido'
                        }
                    })}
                />
                {errors.zipCode && <span>{errors.zipCode.message}</span>}

                <input
                    type='number'
                    placeholder='Número'
                    name='number'
                    ref={register({
                        required: 'número da residência obrigatório',
                    })}
                />
                {errors.number && <span>{errors.number.message}</span>}

                <input
                    type='text'
                    placeholder='Latitude'
                    name='lat'
                    defaultValue={latLng[0]}
                    ref={register({
                        required: 'Campo latitude obrigatório',
                        pattern: {
                            value: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
                            message: 'Coordenadas inválidas'
                        }
                    })}
                />
                {errors.lat && <span>{errors.lat.message}</span>}

                <input type='text'
                    placeholder='Longitude'
                    defaultValue={latLng[1]}
                    name='lng'
                    ref={register({
                        required: 'Campo longitude obrigatório',
                        pattern: {
                            value: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
                            message: 'Coordenadas inválidas'
                        }
                    })}
                />
                {errors.lng && <span>{errors.lng.message}</span>}

                <input
                    type='number'
                    placeholder='Número de moradores'
                    name='residentsQuantity'
                    ref={register({
                        required: 'Campo número de moradores obrigatório',
                        minLength: {
                            value: 0,
                            message: 'Residência deve ter ao menos um morador'
                        },
                    })}
                />
                {errors.residentsNumber && <span>{errors.residentsNumber.message}</span>}

                <input type='submit' value='Enviar' />
            </form>
        </div >
    )
}

export default Panel;
