using System;
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
                       Emp_id, Emp_name,
                       Emp_phone, Emp_email,
                       Emp_hourly_wage, Emp_hours
                       from ProductManagementDB.Employees";
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
                string query = @"insert into ProductManagementDB.Employees(Emp_name, Emp_phone, Emp_email, Emp_hourly_wage, Emp_hours)
                         values
                             (
                             '" + emp.Emp_name + @"',
                             '" + emp.Emp_phone + @"',
                             '" + emp.Emp_email + @"',
                             '" + emp.Emp_hourly_wage + @"',
                             '" + emp.Emp_hours + @"'
                             )";
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
                return new JsonResult("Added successfully");
            }

            [HttpPut]
            public JsonResult Put(Employee emp)
            {
                string query = @"update ProductManagementDB.Employees set
                            Emp_name='" + emp.Emp_name + @"',
                            Emp_phone='" + emp.Emp_phone + @"',
                            Emp_email='" + emp.Emp_email + @"',
                            Emp_hourly_wage='" + emp.Emp_hourly_wage + @"',
                            Emp_hours='" + emp.Emp_hours + @"'
                            where emp_id=" + emp.Emp_id + @"
                            ";

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
                return new JsonResult("Update successfully");
            }

            [HttpDelete("{id}")]
            public JsonResult Delete(int id)
            {
                string query = @"delete from ProductManagementDB.Employees
                            where Emp_id = " + id + @"
                            ";

                DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                //string mysqlDataSourse = _configuration.GetConnectionString("Default");
                //MySqlDataReader myReader;
                //using (MySqlConnection myCon = new MySqlConnection(mysqlDataSourse))
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
                return new JsonResult("Deleted successfully");
            }
            //public List <UserModel> GetUsers()
        }
    }

