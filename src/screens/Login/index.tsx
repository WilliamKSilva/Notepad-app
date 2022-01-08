import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { TextLink } from "../../components/TextLink";
import { Container, Logo, WrapperLogo, Title, WrapperContent, WrapperLinks } from "./styles";

export function Login() {
    const { control, formState: { errors } } = useForm();
    const navigation = useNavigation();
    
    return (
        <Container>                
            <WrapperContent>
                <WrapperLogo>
                    <Logo name="notebook"/>
                    <Title>Notepad</Title>
                </WrapperLogo>                
                <InputForm 
                    placeholder="Login"
                    control={control}
                    name="login"
                    required
                    error={errors.login?.message}                    
                    autoCapitalize="none"                                        
                />
                <InputForm 
                    placeholder="Senha"
                    control={control}
                    name="password"
                    required
                    error={errors.password?.message}
                    autoCapitalize="none"
                />
                <Button 
                    title="LogIn"
                    onPress={() => navigation.navigate('Home')}
                />
                <WrapperLinks>
                    <TextLink 
                        title="Esqueci minha senha!"
                        routeName="ChangePassword"
                    />
                    <TextLink 
                        title="Resgistrar-se"
                        routeName="Register"
                    />
                </WrapperLinks>
            </WrapperContent>            
        </Container>
    );
}