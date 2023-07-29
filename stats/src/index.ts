import { Summary } from "./Summary";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const reader = MatchReader.fromCsv('football.csv');//静态方法不需要new
reader.load();

const summary=Summary.winsAnalysisAndHtmlReport('Watford');
summary.buildAndPrintReport(reader.matches);
