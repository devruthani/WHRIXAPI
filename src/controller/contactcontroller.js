
const express = require('express');     // Web framework for creating API routes
const crypto = require('crypto'); 
const {ContactPage, ContactFaq} = require("../models")




const contactController = {

    /* -------------------------------------------------------------------------- */
    /*                            contact page section                            */
    /* -------------------------------------------------------------------------- */

    /* --------------------------- create contact page -------------------------- */
    async createContactPage(req, res) {
        try {

            const {hero_tagling, hero_title, hero_highlight,hero_description,support_title,support_subtitle,faq_title,faq_description} =req.body
            const contactPage = await ContactPage.create({
                hero_tagling, hero_title, hero_highlight,hero_description,support_title,support_subtitle,faq_title,faq_description
            })
            if(contactPage){
                return res.status(200).json({
                    error:false,
                    message: "Contact Page created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create Contact Page",
                    
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
    /* -------------------------- get all contact page -------------------------- */
    async getContactPage(req,res){
        try {
            const getContactPage = await ContactPage.findAll()
            if(getContactPage){
                return res.status(200).json({
                    error:false,
                    message: "Contact Page fetched successfully",
                    data:getContactPage
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch Contact Page",

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
    /*                             contact FAQ section                            */
    /* -------------------------------------------------------------------------- */
    async contactFaq(req,res){
        try {

            const {category, question, answer, order} =req.body
            const contactFaq = await ContactFaq.create({category, question, answer, order
             
            })
            if(contactFaq){
                return res.status(200).json({
                    error:false,
                    message: "Contact FAQ created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create Contact FAQ",
                    
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
module.exports = {contactController};
