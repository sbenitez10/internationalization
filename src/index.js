import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

addLocaleData(esLocaleData);
var userLang= navigator.language;

function getLocale(){
    return userLang === "es" ? localeEsMessages : localeEnMessages
}

ReactDOM.render(
	<IntlProvider locale={userLang} messages= {getLocale()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);

