﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;
using ManagementAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Data.SqlClient;

namespace ManagementAPI.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class EmployeeController : ControllerBase
        {
            private readonly IConfiguration _configuration;
            private readonly IWebHostEnvironment _env;

            public EmployeeController(IConfiguration configuration, IWebHostEnvironment env)
            {
                _configuration = configuration;
                _env = env;
            }

            [HttpGet]
            public JsonResult Get()
            {
                string query = @"select
                      *
                       from dbo.Employees";
                DataTable table = new DataTable();
            //string mysqlDataSourse = _configuration.GetConnectionString("Default");
            //MySqlDataReader myReader;
            //using (MySqlConnection myCon = new MySqlConnection(mysqlDataSourse))
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                    myCon.Open();
                //using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult(table);
            }


        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            string query = @"insert into dbo.Employees(emp_name, emp_phone, emp_email, emp_hourly_wage, emp_hours)
                         values
                             (
                             '" + emp.emp_name + @"',
                             '" + emp.emp_phone + @"',
                             '" + emp.emp_email + @"',
                             '" + emp.emp_hourly_wage + @"',
                             '" + emp.emp_hours + @"'
                             )";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Succesfuly!!");
        }

        [HttpPut]
        public JsonResult Put(Employee emp)
        {
            string query = @"update dbo.Employees set
                            emp_name='" + emp.emp_name + @"',
                            emp_phone='" + emp.emp_phone + @"',
                            emp_email='" + emp.emp_email + @"',
                            emp_hourly_wage='" + emp.emp_hourly_wage + @"',
                            emp_hours='" + emp.emp_hours + @"'
                            where emp_id=" + emp.emp_id + @"
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
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Succesfuly!!");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.Employees where emp_id = " + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Succesfuly!!");
        }
    }
    }

