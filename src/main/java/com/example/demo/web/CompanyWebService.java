package com.example.demo.web;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Coupon;
import com.example.demo.entities.WsCoupon;
import com.example.demo.entry.CompanyFacade;
import com.example.demo.exceptions.CompanyNotFoundException;
import com.example.demo.exceptions.CouponAlreadyExistsException;
import com.example.demo.exceptions.CouponNotFoundException;
import com.example.demo.other.CouponType;

/**
 * Class CompanyWebservice
 * a collection of services to manage a company
 * @author Dor
 *
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/company-api")
public class CompanyWebService {
	
	CompanyFacade facade;
	
/**
 * Service to createa a coupon	
 * @param request
 * @param coup
 * @throws CompanyNotFoundException
 * @throws InterruptedException
 * @throws CouponAlreadyExistsException
 * @throws ParseException
 */
	
	@RequestMapping (value = "/coupon" , method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
	public void createCoupon(HttpServletRequest request,@RequestBody WsCoupon coup) throws CompanyNotFoundException, InterruptedException, CouponAlreadyExistsException, ParseException {
			this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
			Coupon c = coup.convertToCoupon();
			c.setTypePic();
			facade.createCoupon(c);
		
	}
	
/**
 * Service to remove a coupon	
 * @param request
 * @param c
 */
	@RequestMapping (value = "/coupon" , method = RequestMethod.PATCH , consumes = MediaType.APPLICATION_JSON_VALUE)	
	public void removeCoupon(HttpServletRequest request,@RequestBody Coupon c) {
		try {
			this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
			this.facade.removeCoupon(c);
		} catch ( InterruptedException | CouponNotFoundException | CompanyNotFoundException e) {
			e.printStackTrace();
		}
	}
	
/**
 * Service to update a coupon	
 * @param request
 * @param c
 */
	
	@RequestMapping (value = "/coupon" , method = RequestMethod.PUT , consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateCoupon(HttpServletRequest request,@RequestBody Coupon c) {
		this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
		try {
			c.setTypePic();
			this.facade.updateCoupon(c);
		} catch ( InterruptedException | CouponNotFoundException e) {
			e.printStackTrace();
		}
	}
	
/**
 * service to get a specific coupon by id	
 * @param request
 * @param id
 * @return
 */
	
	
	@RequestMapping (value = "/coupon/{id}" , method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Coupon getCoupon(HttpServletRequest request,@PathVariable("id") long id){
		this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
		Coupon result = null;
		try {
			result = this.facade.getCoupon(id);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return result;
	}
	
/**
 * service to get all company coupons	
 * @param request
 * @return
 */
	
	@RequestMapping (value = "/coupon" , method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Coupon> getAllCoupons(HttpServletRequest request){

		this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
		List<Coupon> list = null;
		try {
			list = this.facade.getAllCoupons();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		Collections.sort(list);
		return list;	
	}
	
	
/**
 * service to get all company coupons by specific type	
 * @param request
 * @param typetext
 * @return
 */
	
	@RequestMapping (value = "/coupon/by-type/{type}" , method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Coupon> getCouponByType(HttpServletRequest request,@PathVariable("type") String typetext)
	{
		this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
		CouponType type = CouponType.valueOf(typetext);
		List<Coupon> result = null;
		try {
			result = this.facade.getCouponsByType(type);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return result;
	}	
	
/**
 * service to get all company coupons by max price	
 * @param request
 * @param price
 * @return
 */
	
	@RequestMapping (value = "/coupon/by-price/{maxprice}" , method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Coupon> getCouponByMaxPrice(HttpServletRequest request,@PathVariable("maxprice") double price)
	{
		this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
		List<Coupon> result = null;
		try {
			result = this.facade.getCouponsByMaxPrice(price);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return result;
	}	
	
/**
 * service to get all company coupons by max end date	
 * @param request
 * @param datetext
 * @return
 */
	
	@RequestMapping (value = "/coupon/by-maxdate/{enddate}" , method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Coupon> getCouponByMaxEndDate(HttpServletRequest request,@PathVariable("enddate") String datetext)
	{
		this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = formatter.parse(datetext);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		List<Coupon> result = null;
		try {
			this.facade = (CompanyFacade) request.getSession().getAttribute("companyfacade");
			result = this.facade.getCouponsByMaxEndDate(date);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return result;
	}	
}
