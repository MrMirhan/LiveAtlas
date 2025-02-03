/*
 * Copyright 2022 James Lyne
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Util} from "leaflet";
import {LiveAtlasTileLayer, LiveAtlasTileLayerOptions} from "@/leaflet/tileLayer/LiveAtlasTileLayer";

// noinspection JSUnusedGlobalSymbols
export class Pl3xmapTileLayer extends LiveAtlasTileLayer {
	constructor(map: LiveAtlasTileLayerOptions) {
		super(map);
		this._url = `${map.baseUrl}{z}/${map.world.renderers[0].label}/{x}_{y}.png`;
		Util.setOptions(this, {zoomReverse: false});
	}
}
