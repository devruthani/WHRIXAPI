
const express = require('express');     // Web framework for creating API routes
const crypto = require('crypto'); 
const { CareerBenefit, CareerPage, CareerJobListing } = require("../models")




const careercontroller = {

    /* -------------------------------------------------------------------------- */
    /*                           career page section                            */
    /* -------------------------------------------------------------------------- */

    /* --------------------------- createcareer page -------------------------- */
    async createCareerpage(req, res) {
        try {

            const {hero_badge, hero_title, hero_highlight, hero_subtext, why_join_title, why_join_description, cta_title, cta_description, cta_primary_text, cta_seconary_text} =req.body
            const careerPage = await CareerPage.create({
                hero_badge, hero_title, hero_highlight, hero_subtext, why_join_title, why_join_description, cta_title, cta_description, cta_primary_text, cta_seconary_text
            })
            if(careerPage){
                return res.status(200).json({
                    error:false,
                    message: "Career page created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create Career page",
                    
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
    /* -------------------------- get all Career page -------------------------- */
    async getcareerPage(req,res){
        try {
            const getcareerPage = await CareerPage.findAll()
            if(getcareerPage){
                return res.status(200).json({
                    error:false,
                    message: "Career page fetched successfully",
                    data:getcareerPage
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch Career page",

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
    /*                             Career benefits section                            */
    /* -------------------------------------------------------------------------- */
    async createCareerBenefits(req,res){
        try {

            const {icon_name, title, description,} =req.body
            const careerBenefits = await CareerBenefit.create({icon_name, title, description,
             
            })
            if(careerBenefits){
                return res.status(200).json({
                    error:false,
                    message: "Career Benefit created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create Career Benefit",
                    
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
      /* -------------------------- get all career benefits -------------------------- */
    async getCareerBenefits(req,res){
        try {
            const getCareerBenefits = await CareerBenefit.findAll()
            if(getCareerBenefits){
                return res.status(200).json({
                    error:false,
                    message: "Career benefits fetched successfully",
                    data:getCareerBenefits
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch Career benefits",

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
    /*                             career joblist  section                            */
    /* -------------------------------------------------------------------------- */
    async careerJoblist(req,res){
        try {

            const {title, location, type, department, experience, description, requirements, benefits, } =req.body
            const careerJoblist = await CareerJobListing.create({title, location, type, department, experience, description, requirements, benefits, 
             
            })
            if(careerJoblist){
                return res.status(200).json({
                    error:false,
                    message: "Career joblisting created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create Career joblisting",
                    
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
      /* -------------------------- get all Career joblisting -------------------------- */
    async getcareerJoblist(req,res){
        try {
            const getcareerJoblist = await CareerJobListing.findAll()
            if(getcareerJoblist){
                return res.status(200).json({
                    error:false,
                    message: "Career joblisting fetched successfully",
                    data:getcareerJoblist
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch Career joblisting",

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
module.exports = {careercontroller};
