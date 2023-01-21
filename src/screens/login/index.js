import * as React from "react";
import "./style.css";
import {
    Input
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Login = () => {

    return (
        <div className="areaTotal">
            <div className="areaLogo">
                <img className="logo" src="logoOpt.svg" alt="Logo do App Rainbow Quiz." />
            </div>
            <div className="areaInput">
                <Input
                    sx={{ minWidth: "100%", top: "10%" }}
                    placeholder={"  Nome de Usuário"}
                >
                </Input>
                <PersonOutlineIcon sx={{ position: 'absolute', left: '90%', top: '9%' }}
                    color="disabled" />
                <Input
                    sx={{ minWidth: "100%", top: "30%" }}
                    placeholder={"  Senha"}
                ></Input>
                <RemoveRedEyeIcon
                    sx={{ position: 'absolute', left: '90%', top: '50%' }}
                    color="disabled" />
                <VisibilityOffIcon
                    sx={{ position: 'absolute', left: '90%', top: '50%' }}
                    color="disabled" />
            </div>
            <div className="areaBotao">
                <Link to={"/home"}>
                    <div className="botao" id="anchorsBotao">ENTRAR</div>
                </Link>
            </div>
            <div className="areaCadastro"> OU
                <Link to={"/register"}>
                    <div className="cadastro">Criar nova conta</div>
                </Link>
            </div>
        </div>
    );
};