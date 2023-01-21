import * as React from "react";
import "./style.css";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Register = () => {

    return (
        <div className="areaTotalCadastro">
            <div className="areaLogoCadastro">
                <img className="logoCadastro" src="logoOpt.svg" alt="Logo do App Rainbow Quiz." />
            </div>
            <div className="areaInputCadastro">
                <Input
                    sx={{ minWidth: "100%" }}
                    placeholder={"  Nome Completo"}
                ></Input>
                <PersonOutlineIcon
                    sx={{ position: 'absolute', left: '90%' }}
                    color="disabled" />
                <Input
                    sx={{ minWidth: "100%", top: "10%" }}
                    placeholder={"  Nome de Usuário"}
                ></Input>
                <PersonOutlineIcon
                    sx={{ position: 'absolute', left: '90%', top: '20%' }}
                    color="disabled" />
                <Input
                    sx={{ minWidth: "100%", top: "20%" }}
                    placeholder={"  E-mail"}
                ></Input>
                <MailOutlineIcon
                    sx={{ position: 'absolute', left: '90%', top: '38%' }}
                    color="disabled" />
                <Input
                    sx={{ minWidth: "100%", top: "30%" }}
                    placeholder={"  Senha"}
                ></Input>
                <RemoveRedEyeIcon
                    sx={{ position: 'absolute', left: '90%', top: '57%' }}
                    color="disabled" />
                <VisibilityOffIcon
                    sx={{ position: 'absolute', left: '90%', top: '57%' }}
                    color="disabled" />
                <Input
                    sx={{ minWidth: "100%", top: "40%" }}
                    placeholder={"  Confirme a Senha"}
                ></Input>
                <RemoveRedEyeIcon
                    sx={{ position: 'absolute', left: '90%', top: '75%' }}
                    color="disabled" />
                <VisibilityOffIcon
                    sx={{ position: 'absolute', left: '90%', top: '75%' }}
                    color="disabled" />
            </div>
            <div className="areaBotaoCadastro">
                <Link to={"/login"}>
                    <div className="botaoCadastro" id="anchors">CADASTRAR</div>
                </Link>
            </div>
        </div>
    );
};