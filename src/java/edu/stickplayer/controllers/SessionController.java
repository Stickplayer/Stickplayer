/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.stickplayer.controllers;

import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.Locale;
import javax.annotation.PostConstruct;
import javax.faces.context.FacesContext;


@Named(value = "sessionController")
@SessionScoped
public class SessionController implements Serializable {

    private Locale language;
    /*Atributos del usuario en el inicio de sesion*/
    private String nickname;
    private String contraseña;
    public SessionController() {
    }
    @PostConstruct
    public void init(){
        language = FacesContext.getCurrentInstance().getApplication().getDefaultLocale();
    }

    public Locale getLanguage() {
        return language;
    }

    public void setLanguage(Locale language) {
        this.language = language;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    public void changeLanguage(String lang){
        language = new Locale(lang);
    }

}
