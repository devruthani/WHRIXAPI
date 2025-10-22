
const express = require('express');     // Web framework for creating API routes
const crypto = require('crypto'); 
const { DeveloperEndpoint, DeveloperPage, DeveloperSdk } = require("../models")


const developercontroller = {

    /* -------------------------------------------------------------------------- */
    /*                           developer page section                            */
    /* -------------------------------------------------------------------------- */

    /* --------------------------- createdeveloper page -------------------------- */
    async createdeveloperpage(req, res) {
        try {

            const {hero_title, hero_description, quickstart_button_text, api_reference_button_text, 
                quickstart_title, quickstart_description, step1_title, step1_description, step1_button_text, 
                step2_title, step2_description, step3_title, step3_description, webhooks_title, webhook_description,
                 webhook_example_payload, webhook_security_note, cta_title, cta_description, cta_primary_button, cta_secondary_button,  
                } =req.body
            const developerPage = await DeveloperPage.create({
                hero_title, hero_description, quickstart_button_text, api_reference_button_text, 
                quickstart_title, quickstart_description, step1_title, step1_description, step1_button_text, 
                step2_title, step2_description, step3_title, step3_description, webhooks_title, webhook_description, 
                webhook_example_payload, webhook_security_note, cta_title, cta_description, cta_primary_button, cta_secondary_button, 
            })
            if(developerPage){
                return res.status(200).json({
                    error:false,
                    message: "developer page created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create developer page",
                    
                })
            }
            
        } catch (error) {
        console.log(error);
         return  res.status(500).json({
        error:true,
        message: "Oops! some thing went wrong",
        data:error.message
        })
    
        }
        
    },
    /* -------------------------- get all developer page -------------------------- */
    async getdeveloperPage(req,res){
        try {
            const getdeveloperPage = await DeveloperPage.findAll()
            if(getdeveloperPage){
                return res.status(200).json({
                    error:false,
                    message: "developer page fetched successfully",
                    data:getdeveloperPage
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch developer page",

                })
            }
            
        } catch (error) {
            console.log(error);
            return  res.status(500).json({
            error:true,
            message: "Oops! some thing went wrong",
            data:error.message
         })
            
        }
        
    },




    /* -------------------------------------------------------------------------- */
    /*                             developer Endpoint section                            */
    /* -------------------------------------------------------------------------- */
    async createdeveloperEndpoint(req,res){
        try {

            const {endpoint_name, method, url_path, description, sample_request, 
                sample_response, authentication_required} =req.body
            const developerEndpoint = await DeveloperEndpoint.create({endpoint_name, method, url_path, description, sample_request, 
                sample_response, authentication_required
             
            })
            if(developerEndpoint){
                return res.status(200).json({
                    error:false,
                    message: "developer Endpoint created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create developer Endpoint",
                    
                })
            }
            
        } catch (error) {
        console.log(error);
         return  res.status(500).json({
        error:true,
        message: "Oops! some thing went wrong",
        data:error.message
        })
    
        }
    },
      /* -------------------------- get all developer Endpoint -------------------------- */
    async getdeveloperEndpoint(req,res){
        try {
            const getdeveloperEndpoint = await DeveloperEndpoint.findAll()
            if(getdeveloperEndpoint){
                return res.status(200).json({
                    error:false,
                    message: "developer Endpoint fetched successfully",
                    data:getdeveloperEndpoint
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch developer Endpoint",

                })
            }
            
        } catch (error) {
            console.log(error);
            return  res.status(500).json({
            error:true,
            message: "Oops! some thing went wrong",
            data:error.message
         })
            
        }
        
    },
    /* -------------------------------------------------------------------------- */
    /*                             developer Sdk  section                            */
    /* -------------------------------------------------------------------------- */
    async developerSdk(req,res){
        try {

            const {sdk_name, sdk_language, install_command, github_url, documentation_url, description } =req.body
            const developerSdk = await DeveloperSdk.create({sdk_name, sdk_language, install_command, github_url, documentation_url, description 
             
            })
            if(developerSdk){
                return res.status(200).json({
                    error:false,
                    message: "developer Sdk created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create developer Sdk",
                    
                })
            }
            
        } catch (error) {
        console.log(error);
         return  res.status(500).json({
        error:true,
        message: "Oops! some thing went wrong",
        data:error.message
        })
    
        }
    },
      /* -------------------------- get all developer Sdking -------------------------- */
    async getdeveloperSdk(req,res){
        try {
            const getdeveloperSdk = await DeveloperSdk.findAll()
            if(getdeveloperSdk){
                return res.status(200).json({
                    error:false,
                    message: "developer Sdk fetched successfully",
                    data:getdeveloperSdk
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch developer Sdk",

                })
            }
            
        } catch (error) {
            console.log(error);
            return  res.status(500).json({
            error:true,
            message: "Oops! some thing went wrong",
            data:error.message
         })
            
        }
        
    }


    
   

































}
module.exports = {developercontroller};
