//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.Extensions.Configuration;
//using System.Data.SqlClient;
//using System.Data;
//using WebAPI.Models;
//using System.IO;
//using Microsoft.AspNetCore.Hosting;


//namespace WebAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class UserController : ControllerBase
//    {
//        private readonly IConfiguration _configuration;
//        private readonly IWebHostEnvironment _env;

//        public UserController(IConfiguration configuration, IWebHostEnvironment env)
//        {
//            _configuration = configuration;
//            _env = env;
//        }

//        [HttpGet]
//        public JsonResult Get()
//        {
//            string query = @"select * from dbo.Users";
//            DataTable table = new DataTable();
//            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
//            SqlDataReader myReader;
//            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
//            {
//                myCon.Open();
//                using (SqlCommand myCommand = new SqlCommand(query, myCon))
//                {
//                    myReader = myCommand.ExecuteReader();
//                    table.Load(myReader);

//                    myReader.Close();
//                    myCon.Close();
//                }
//            }
//            return new JsonResult(table);
//        }

//        [HttpPost]
//        public JsonResult Post(User usr)
//        {
//            string query = @"insert into dbo.Users (usr_first_name,usr_last_name,usr_phone,usr_email,usr_password) values (
//            '" + usr.usr_first_name + @"',
//            '" + usr.usr_last_name + @"',
//            '" + usr.usr_phone + @"',
//            '" + usr.usr_email + @"',
//            '" + usr.usr_password + @"'
//            )";
//            DataTable table = new DataTable();
//            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
//            SqlDataReader myReader;
//            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
//            {
//                myCon.Open();
//                using (SqlCommand myCommand = new SqlCommand(query, myCon))
//                {
//                    myReader = myCommand.ExecuteReader();
//                    table.Load(myReader);

//                    myReader.Close();
//                    myCon.Close();
//                }
//            }
//            return new JsonResult("Added Succesfuly!!");
//        }

//        [HttpPut]
//        public JsonResult Put(User usr)
//        {
//            string query = @"update dbo.Users set 
//            usr_first_name = '" + usr.usr_first_name + @"',
//            usr_last_name = '" + usr.usr_last_name + @"',
//            usr_last_phone = '" + usr.usr_phone + @"',
//            usr_email = '" + usr.usr_email + @"',
//            usr_password = '" + usr.usr_password + @"'
//            where usr_id = " + usr.usr_id + @"";
//            DataTable table = new DataTable();
//            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
//            SqlDataReader myReader;
//            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
//            {
//                myCon.Open();
//                using (SqlCommand myCommand = new SqlCommand(query, myCon))
//                {
//                    myReader = myCommand.ExecuteReader();
//                    table.Load(myReader);

//                    myReader.Close();
//                    myCon.Close();
//                }
//            }
//            return new JsonResult("Updated Succesfuly!!");
//        }
        


//        [HttpDelete("{id}")]
//        public JsonResult Delete(int id)
//        {
//            string query = @"delete from dbo.Users where usr_id = " + id + @"";
//            DataTable table = new DataTable();
//            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
//            SqlDataReader myReader;
//            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
//            {
//                myCon.Open();
//                using (SqlCommand myCommand = new SqlCommand(query, myCon))
//                {
//                    myReader = myCommand.ExecuteReader();
//                    table.Load(myReader);

//                    myReader.Close();
//                    myCon.Close();
//                }
//            }
//            return new JsonResult("Deleted Succesfuly!!");
//        }

//        /*
//        [Route("SaveFile")]
//        [HttpPost]
//        public JsonResult SaveFile()
//        {
//            try
//            {
//                var httpRequest = Request.Form;
//                var postedFile = httpRequest.Files[0];
//                string filename = postedFile.FileName;
//                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

//                using (var stream = new FileStream(physicalPath, FileMode.Create))
//                {
//                    postedFile.CopyTo(stream);
//                }

//                return new JsonResult(filename);

//            }
//            catch (Exception)
//            {
//                return new JsonResult("anonymous.png");
//            }
//        }
//        */
//        /*
//        [Route("GetAllDepartmentNames")]
//        public JsonResult GetAllDepartmentNames()
//        {
//            string query = @"select DepartmentName from dbo.Department";
//            DataTable table = new DataTable();
//            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
//            SqlDataReader myReader;
//            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
//            {
//                myCon.Open();
//                using (SqlCommand myCommand = new SqlCommand(query, myCon))
//                {
//                    myReader = myCommand.ExecuteReader();
//                    table.Load(myReader);

//                    myReader.Close();
//                    myCon.Close();
//                }
//            }
//            return new JsonResult(table);
//        }
//        */



//    }
//}
