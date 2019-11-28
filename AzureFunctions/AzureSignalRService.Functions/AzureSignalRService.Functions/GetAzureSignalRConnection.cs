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
        [FunctionName("negotiate")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            [SignalRConnectionInfo(HubName = "broadcast")]SignalRConnectionInfo signalRConnectionInfo,
            ILogger log)
        {
            return (ActionResult)new OkObjectResult(signalRConnectionInfo);
        }
    }
}
