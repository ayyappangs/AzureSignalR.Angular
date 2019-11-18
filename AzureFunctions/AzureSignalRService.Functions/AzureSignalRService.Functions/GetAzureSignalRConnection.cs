using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;

namespace AzureSignalRService.Functions
{
    public static class GetAzureSignalRConnection
    {
        [FunctionName("GetAzureSignalRConnection")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [SignalRConnectionInfo(HubName = "sendmessage")]SignalRConnectionInfo signalRConnectionInfo,
            ILogger log)
        {
            return (ActionResult)new OkObjectResult(signalRConnectionInfo);
        }
    }
}
