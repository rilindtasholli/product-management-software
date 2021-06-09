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

namespace ManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public SalesController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select
                       sal_id, sal_date,
                       sal_client
                       from Sales";
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
                    SqlDataReader sqlDataReader = myCommand.ExecuteReader();
                    myReader = sqlDataReader;
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Sales sal)
        {
            string query = @"insert into Sales(sal_date)
                         values
                             (
                             '" + sal.Sal_date + @"'
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
        public JsonResult Put(Sales sal)
        {
            string query = @"update Sales set
                            sal_date='" + sal.Sal_date + @"'
                            where sal_id=" + sal.Sal_id + @"
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
            return new JsonResult("Updated successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from Sales
                            where sal_id = " + id + @"
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
    }
}