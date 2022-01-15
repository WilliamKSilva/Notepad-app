import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { CardInput } from "../../components/Card";
import { InputForm } from "../../components/InputForm";
import { Text } from "../../components/Text";
import { Container, WrapperButton } from "./styles";

export function ChangePassword() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    return (
        <Container>
            <CardInput title="Update your password">
                <InputForm 
                    control={control}                    
                    name="password"
                    placeholder="Password"
                    required
                    error={errors.password?.message}
                    autoCapitalize="none"
                />
                <InputForm 
                    control={control}                    
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    error={errors.confirmPassword?.message}
                    autoCapitalize="none"
                />   
            </CardInput> 
            <WrapperButton>
                <Button title="Send"/>
            </WrapperButton>                                                                        
        </Container>
    )
}