using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using ManagementAPI.Models;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        private readonly IConfiguration _configuration;


        public SuppliersController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;

        }

        [HttpGet]
        public JsonResult Get()
        {
            try
            {
                string query = @"
                    select sup_id, sup_name, supp_address, sup_email, sup_phone from Suppliers
                    ";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader); ;

                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult(table);
            }
            catch (Exception e)
            {
                return new JsonResult(e);
            }
        }

        [HttpPost]
        public JsonResult Post(Suppliers sup)
        {
            try
            {
                string query = @"
                    insert into Suppliers
                    (sup_name,supp_address,sup_email,sup_phone)
                    values 
                    (
                    
                    '" + sup.sup_name + @"'
                    ,'" + sup.supp_address + @"'
                    ,'" + sup.sup_email + @"'
                    ,'" + sup.sup_phone + @"'
                    )
                    ";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader); ;

                        myReader.Close();
                        myCon.Close();
                    }
                }


                return new JsonResult("Added Successfully");
            }
            catch (Exception e)
            {
                return new JsonResult(e);
            }

        }
        [HttpPut]
        public JsonResult Put(Suppliers sup)
        {
            try
            {
                string query = @"
                    update Suppliers set 
                  sup_phone = '" + sup.sup_phone + @"'
                    ,sup_name = '" + sup.sup_name + @"'
                    ,supp_address = '" + sup.supp_address + @"'
                    ,sup_email = '" + sup.sup_email + @"'
                    where sup_id = " + sup.sup_id + @" 
                    ";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader); ;

                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult("Updated Successfully");

            }
            catch (Exception e)
            {
                return new JsonResult(e);
            }
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            try
            {
                string query = @"
                    delete from Suppliers
                    where sup_id = " + id + @" 
                    ";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader); ;

                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult("Deleted Successfully");

            }
            catch (Exception e)
            {
                return new JsonResult(e);
            }
        }



    }
}


