"use strict";
import {DatasetLoader} from "./DatasetLoader"
import {CatamelInterface} from "./CatamelInterface"


let catamel_interface = new CatamelInterface();
let ds_load = new DatasetLoader(catamel_interface);


ds_load.load_dataset();