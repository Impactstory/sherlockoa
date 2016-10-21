angular.module('templates.app', ['landing.tpl.html']);

angular.module("landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing.tpl.html",
    "<div class=\"top-screen\" layout=\"row\" layout-align=\"center center\">\n" +
    "    <div class=\"content\">\n" +
    "\n" +
    "        <div class=\"enter-doi no-doi demo-step\"\n" +
    "             ng-class=\"{'animated fadeOutDown': animation=='2start'}\"\n" +
    "             ng-hide=\"animation=='2start' || animation=='2finish'\">\n" +
    "\n" +
    "            <h1 class=\"animation-{{ !!animation }} site-heading\">\n" +
    "                <img src=\"static/img/oadoi-logo.png\" alt=\"\" class=\"logo\">\n" +
    "                Leap over tall paywalls in a single bound.\n" +
    "            </h1>\n" +
    "\n" +
    "            <div class=\"under\">\n" +
    "                <div class=\"input-row\">\n" +
    "                    <md-input-container class=\"md-block example-selected-{{ main.exampleSelected }}\" flex-gt-sm=\"\">\n" +
    "                        <label ng-show=\"!animation\" class=\"animating-{{ animation }}\" >Paste your DOI here</label>\n" +
    "                        <input ng-model=\"main.doi\" ng-disabled=\"animation\">\n" +
    "                        <md-progress-circular md-diameter=\"26px\"></md-progress-circular>\n" +
    "\n" +
    "                    </md-input-container>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"text\">\n" +
    "                    <div class=\"example-doi\"\n" +
    "                         ng-class=\"{'animated fadeOut': animation}\"\n" +
    "                         ng-hide=\"animation\">\n" +
    "                        <span class=\"label\">or try this example: </span>\n" +
    "                        <span class=\"val\" ng-click=\"selectExample()\">http://doi.org/{{ exampleDoi }}</span>\n" +
    "                        <a href=\"http://doi.org/{{ exampleDoi }}\" target=\"_blank\">[paywall]</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"has-results demo-step\"\n" +
    "             ng-class=\"{'animated fadeInDown': animation==='2finish'}\"\n" +
    "             ng-show=\"animation && animation==='2finish'\">\n" +
    "\n" +
    "\n" +
    "            <h1 ng-show=\"main.resp.is_free_to_read\"><i class=\"fa fa-unlock-alt\"></i> Success!</h1>\n" +
    "            <h1 ng-show=\"!main.resp.is_free_to_read\"><i class=\"fa fa-lock\"></i> No dice</h1>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <span class=\"hybrid success result\" ng-show=\"main.resp.is_subscription_journal && main.resp.oa_color=='gold'\">\n" +
    "                This article is <a href=\"{{ main.resp.free_fulltext_url }}\" target=\"_blank\">openly available</a> as Hybrid OA in a subscription journal,\n" +
    "            </span>\n" +
    "\n" +
    "            <span class=\"gold journal success result\" ng-show=\"main.resp.oa_color=='gold' && main.resp.doi_resolver == 'crossref'\">\n" +
    "                This article is <a href=\"{{ main.resp.free_fulltext_url }}\" target=\"_blank\">openly available</a> in a <span class=\"gold-oa\">Gold OA</span> journal,\n" +
    "            </span>\n" +
    "\n" +
    "            <span class=\"gold repo success result\" ng-show=\"main.resp.oa_color=='gold' && main.resp.doi_resolver == 'datacite'\">\n" +
    "                This article is <a href=\"{{ main.resp.free_fulltext_url }}\" target=\"_blank\">openly available</a> in a <span class=\"gold-oa\">Gold OA</span> repository,\n" +
    "            </span>\n" +
    "\n" +
    "\n" +
    "            <span class=\"green success result\" ng-show=\"main.resp.oa_color=='green'\">\n" +
    "                This article was\n" +
    "                <a href=\"{{ main.resp.url }}\">published behind a paywall,</a>\n" +
    "                but <a href=\"{{ main.resp.free_fulltext_url }}\" target=\"_blank\">we found a copy</a> that’s\n" +
    "                free to read<span ng-show=\"main.resp.is_boai_license\" class=\"full-oa\"> and reuse</span>,\n" +
    "            </span>\n" +
    "\n" +
    "\n" +
    "            <span class=\"not-oa failure result\" ng-show=\"!main.resp.free_fulltext_url\">\n" +
    "                Sorry, this article is behind a paywall, and we couldn’t find a free copy anywhere.\n" +
    "                Unfortunately, this is still true\n" +
    "                <a href=\"https://arxiv.org/abs/1206.3664\">for around 80% of scholarly articles.</a>\n" +
    "            </span>\n" +
    "\n" +
    "            <span class=\"license-info\" ng-show=\"main.resp.is_free_to_read\">\n" +
    "                <span class=\"license not-specified\" ng-show=\"!main.resp.license\">\n" +
    "                    with no license specified.\n" +
    "                </span>\n" +
    "                <span class=\"license partly-open\" ng-show=\"main.resp.license && !main.resp.is_boai_license\">\n" +
    "                    under a\n" +
    "                    <a href=\"http://sparcopen.org/our-work/howopenisit/\">partially open license ({{ main.resp.license }}).</a>\n" +
    "                </span>\n" +
    "                <span class=\"license fully-open\" ng-show=\"main.resp.license && main.resp.is_boai_license\">\n" +
    "                    under a\n" +
    "                    <a href=\"http://sparcopen.org/our-work/howopenisit/\">fully open license ({{ main.resp.license }}).</a>\n" +
    "                </span>\n" +
    "            </span>\n" +
    "\n" +
    "\n" +
    "            <div class=\"tip\" ng-show=\"main.resp.oa_color=='green'\">\n" +
    "                <div class=\"val\"> <em>Pro tip: </em> Add \"oa\" to any DOI to get an oaDOI. For example,\n" +
    "\n" +
    "                <a href=\"http://oadoi.org/{{ main.doi }}\" target=\"_blank\">http://<strong>oa</strong>doi.org/{{ main.doi }}</a>\n" +
    "                will take you straight to the free version of this article.\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"results-options\">\n" +
    "                <a class=\"primary\" href=\"\" ng-click=\"tryAgain()\">learn more</a>\n" +
    "                <a class=\"secondary\"  href=\"\" ng-click=\"tryAgain()\">try another</a>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--\n" +
    "    <div class=\"more\" ng-show=\"!animation || animation=='2finish'\">\n" +
    "        <i class=\"fa fa-chevron-down\"></i>\n" +
    "        Learn more\n" +
    "    </div>\n" +
    "    -->\n" +
    "</div>");
}]);