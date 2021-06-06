using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using ManagementAPI.Models;

namespace ManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ClientController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                    select cli_id, cli_name,
                    cli_email, cli_address, cli_city, cli_phone from Clients";
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
            return new JsonResult(table);

        }


        [HttpPost]

        public JsonResult Post(Client cli)
        {
            string query = @"
                        insert into Clients (cli_name, cli_email, cli_address, cli_city, cli_phone) 
                        values 
                           (
                    '" + cli.cli_name + @"'
                    ,'" + cli.cli_email + @"'
                    ,'" + cli.cli_address + @"'
                    ,'" + cli.cli_city + @"'
                    ,'" + cli.cli_phone + @"'
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
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Client cli)
        {
            string query = @"
                    update Clients set 
                    cli_name = '" + cli.cli_name + @"'
                    ,cli_email = '" + cli.cli_email + @"'
                    ,cli_address = '" + cli.cli_address + @"'
                     ,cli_city = '" + cli.cli_city + @"'
                     ,cli_phone = '" + cli.cli_phone + @"'
                    where cli_id = " + cli.cli_id + @" 
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


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from Clients
                    where cli_id = " + id + @" 
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

    }
}
