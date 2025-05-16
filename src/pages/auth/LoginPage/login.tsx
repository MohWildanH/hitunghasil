import "./style.css";
import pertamina from "../../../assets/Pertamina_Logo.svg";
import { cn } from "../../../lib/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import apiInstance from "../../../api/api";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await apiInstance.post("/user/login", {
        userName,
        password,
      });
      if (response.status === 200) {
        navigate("/laporan-modal");
      }
    } catch (error: any) {
      console.log(error);
      alert(error.response?.data?.message || "Login gagal");
    }
  };

  return (
    <div className={cn("login-container", className)} {...props}>
    {/* Logo di atas card, terpusat */}
    <div className="login-logo-container">
    <img src={pertamina} alt="Login Banner" className="login-image" />
    </div>
      <Card className="login-card">
        <CardHeader className="login-card-header text-center">
          <CardTitle className="login-title">Selamat Datang!</CardTitle>
          <CardDescription className="login-description">
           Silahkan isi Username dan Password yang sudah tersedia terlebih dahulu
          </CardDescription>
        </CardHeader>
        <CardContent style={{ padding: 0 }}>
          <form className="login-form" onSubmit={handleSubmit}>
  {/* Field group */}
  <div className="form-fields">
    <div className="form-group">
      <Label htmlFor="username" className="font-medium">Username</Label>
      <Input
        id="username"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Masukkan username kamu"
        required
        className="login-input"
      />
    </div>
    <div className="form-group">
      <Label htmlFor="password" className="font-medium">Kata Sandi</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Masukkan kata sandi kamu"
        required
        className="login-input"
      />
    </div>
  </div>

  {/* Button */}
  <Button type="submit" className="login-button">
    Masuk Sekarang
  </Button>
</form>
        </CardContent>
      </Card>
    </div>
  );
}
