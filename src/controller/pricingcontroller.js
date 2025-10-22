

const express = require('express');     // Web framework for creating API routes
const crypto = require('crypto'); 
const { PricingAddOn, PricingFaq, PricingFeature, PricingPlan, PricingSection, PricingSection } = require("../models")




const pricingcontroller = {

    /* -------------------------------------------------------------------------- */
    /*                            pricing section                            */
    /* -------------------------------------------------------------------------- */

    /* --------------------------- create pricing -------------------------- */
    async createPricingSection(req, res) {
        try {

            const {title_text, subtitle_text, badge_text, highlight_text} =req.body
            const Pricingsection = await PricingSection.create({
                title_text, subtitle_text, badge_text, highlight_text
            })
            if(Pricingsection){
                return res.status(200).json({
                    error:false,
                    message: "Pricing section created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create Pricing section",
                    
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
    /* -------------------------- get all Pricing section -------------------------- */
    async getPrisingsections(req,res){
        try {
            const getPrisingsections = await PricingSection.findAll()
            if(getPrisingsections){
                return res.status(200).json({
                    error:false,
                    message: "Pricing section fetched successfully",
                    data:getPrisingsections
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch Pricing section",

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
    /*                             Pricing addon section                            */
    /* -------------------------------------------------------------------------- */
    async createPricingaddon(req,res){
        try {

            const {name_text, description_text, price_text} =req.body
            const Pricingaddon = await PricingAddOn.create({name_text, description_text, price_text
             
            })
            if(Pricingaddon){
                return res.status(200).json({
                    error:false,
                    message: "Pricing addon created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create Pricing addon",
                    
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
      /* -------------------------- get all Pricing addon -------------------------- */
    async getPricingaddon(req,res){
        try {
            const getPricingaddon = await PricingAddOn.findAll()
            if(getPricingaddon){
                return res.status(200).json({
                    error:false,
                    message: "Pricing addon fetched successfully",
                    data:getPricingaddon
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch Pricing addon",

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
    /*                             Pricing faq section                            */
    /* -------------------------------------------------------------------------- */
    async createPricingfaq(req,res){
        try {

            const {question_text, answer_text,} =req.body
            const Pricingfaq = await PricingFaq.create({question_text, answer_text,
             
            })
            if(Pricingfaq){
                return res.status(200).json({
                    error:false,
                    message: "Pricing faq created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create pricing faq",
                    
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
      /* -------------------------- get all Pricing faq -------------------------- */
    async getPricingfaq(req,res){
        try {
            const getPricingfaq = await PricingFaq.findAll()
            if(getPricingfaq){
                return res.status(200).json({
                    error:false,
                    message: "Pricing faq fetched successfully",
                    data:getPricingfaq
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch pricing faq",

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
    /*                             pricing feature section                            */
    /* -------------------------------------------------------------------------- */
    async pricingfeature(req,res){
        try {

            const {feature_text, feature_type,} =req.body
            const pricingfeature = await PricingFeature.create({feature_text, feature_type,
             
            })
            if(pricingfeature){
                return res.status(200).json({
                    error:false,
                    message: "pricing feature created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create pricing feature",
                    
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
      /* -------------------------- get all pricing feature -------------------------- */
    async getpricingfeature(req,res){
        try {
            const getpricingfeature = await PricingFeature.findAll()
            if(getpricingfeature){
                return res.status(200).json({
                    error:false,
                    message: "pricing feature fetched successfully",
                    data:getpricingfeature
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch pricing feature",

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
    /*                             pricing plan                           */
    /* -------------------------------------------------------------------------- */
    async pricingPlan(req,res){
        try {

            const {name_text, icon_name, monthly_price, annual_price, description_text, cta_text, is_popular} =req.body
            const pricingPlan = await PricingPlan.create({name_text, icon_name, monthly_price, annual_price, description_text, cta_text, is_popular
             
            })
            if(pricingPlan){
                return res.status(200).json({
                    error:false,
                    message: "pricing plan created successfully",
                    
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to create pricing plan",
                    
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
      /* -------------------------- get all pricing plan -------------------------- */
    async getpricingPlan(req,res){
        try {
            const getpricingPlan = await PricingPlan.findAll()
            if(getpricingPlan){
                return res.status(200).json({
                    error:false,
                    message: "pricing plan fetched successfully",
                    data:getpricingPlan
                })
            }else{
                return res.status(500).json({
                    error:true,
                    message: "Failed to fetch Pricing Plan",

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


}
module.exports = {pricingcontroller};
