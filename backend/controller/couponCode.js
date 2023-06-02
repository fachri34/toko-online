const express = require("express")
const catchAsyncError = require("../middleware/catchAsyncError")
const Shop = require("../model/shop")
const ErrorHandler = require("../utils/errorHandler")
const { isSeller } = require("../middleware/auth")
const CouponCode = require("../model/couponCode")

const router = express.Router()

router.post('/create-coupon-code', isSeller, catchAsyncError(async (req,res,next) => {
    try {
        const isCouponCodeExist = await CouponCode.find({name: req.body.name})

        if(isCouponCodeExist.length !== 0){
            return next(new ErrorHandler("Coupon code already exists!", 400))
        }
        
        const couponCode = await CouponCode.create(req.body)
        res.status(201).json({
            success: true,
            couponCode
        })
    } catch (error) {
        return next(new ErrorHandler(error, 400))
    }
}))


router.get("/get-coupon/:id", isSeller, catchAsyncError(async(req,res,next) => {
    try {
        const couponCodes = await CouponCode.find({ shopId: req.seller.id})

        res.status(201).json({
            success:true,
            couponCodes
        })
    } catch (error) {
        return next(new ErrorHandler(error, 400))
    }
}))

router.delete("/delete-coupon/:id",isSeller, catchAsyncError(async(req,res,next) => {
    try {
        const couponCode = await CouponCode.findByIdAndDelete(req.params.id)

        if(!couponCode){
            return next(new ErrorHandler("Coupon code doesn't exists!!", 404))
        }

        res.status(201).json({
            success: true,
            message: "Coupon Code deleted successfully!",
        })
    } catch (error) {
        return next(new ErrorHandler(error, 400))
    }
}))

router.get("/get-coupon-value/:name", catchAsyncError(async (req,res,next) => {
    try{
        const couponCode = await CouponCode.find({name: req.params.name})

        res.status(200).json({
            success: true,
            couponCode
        })
    }catch(error){
        return next(new ErrorHandler(error, 400))
    }
}))

module.exports = router