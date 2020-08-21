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
            <h2>Cadastro de residências</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='field'>
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
                    {<label>{errors.zipCode && errors.zipCode.message}</label>}
                </div>
                <div className='field'>
                    <input
                        type='number'
                        placeholder='Número'
                        name='number'
                        ref={register({
                            required: 'número da residência obrigatório',
                        })}
                    />
                    {<label>{errors.number && errors.number.message}</label>}

                </div>

                <div className='field'>
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
                    {<label>{errors.lat && errors.lat.message}</label>}

                </div>

                <div className='field'>
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
                    {<label>{errors.lng && errors.lng.message}</label>}
                </div>

                <div className='field'>
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
                    {<label>{errors.residentsQuantity && errors.residentsQuantity.message}</label>}

                </div>

                <input type='submit' value='Salvar' className='submit-button' />
            </form>
        </div >
    )
}

export default Panel;
