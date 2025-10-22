
const express = require('express');     // Web framework for creating API routes
const crypto = require('crypto'); 
const {AboutSection, AboutStat} = require("../models")




const aboutcontroller = {

    /* -------------------------------------------------------------------------- */
    /*                            about  section                            */
    /* -------------------------------------------------------------------------- */

    /* --------------------------- create about section -------------------------- */
    async createaboutsecticon(req, res) {
        try {

            const {label, value, description} =req.body

            const about = await AboutSection.create({
                label, value, description
            })
            if(about){
                return res.status(200).json({
                    error:false,
                    message: "about sections created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create about sections",
                    
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
    /* -------------------------- get all about section -------------------------- */
    async getaboutSection(req,res){
        try {
            const getabout = await AboutSection.findAll()
            if(getabout){
                return res.status(200).json({
                    error:false,
                    message: "About sections fetched successfully",
                    data:getabout
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch About sections",

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
    /*                             About Stat section                            */
    /* -------------------------------------------------------------------------- */
    async aboutStat(req,res){
        try {

            const {category, question, answer, order} =req.body
            const aboutStat = await AboutStat.create({category, question, answer, order
             
            })
            if(aboutStat){
                return res.status(200).json({
                    error:false,
                    message: "About stat created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create About stat",
                    
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
      /* -------------------------- get all About stat -------------------------- */
    async getaboutStat(req,res){
        try {
            const getaboutStat = await AboutStat.findAll()
            if(getaboutStat){
                return res.status(200).json({
                    error:false,
                    message: "About stat fetched successfully",
                    data:getaboutStat
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch About stat",

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
module.exports = {aboutcontroller};
