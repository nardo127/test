function scriptLoader(path, callInit = false)
{
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.async = false;
    script.src = path;

    if (callInit)
        script.onload = function(){
            init();
    }

    try
    {
        var scriptOne = document.getElementsByTagName('script')[0];
        scriptOne.after(script);
    }
    catch(e)
    {
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}


function scriptsLoader(paths)
{
    paths.forEach(function (item, index, array) {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.async = false;
        script.src = item;

        if (index == paths.length -1)
        script.onload = function(){
            init();
        }
    
        try
        {
            var scriptOne = document.getElementsByTagName('script')[index];
            scriptOne.after(script);
        }
        catch(e)
        {
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    });
}

let jsPaths = [
    "./electronFix.js",
    "./node_modules/jquery/dist/jquery.min.js"
]

scriptLoader("./electronFix.js")
scriptLoader("./node_modules/jquery/dist/jquery.min.js", true);

//scriptsLoader(jsPaths);
