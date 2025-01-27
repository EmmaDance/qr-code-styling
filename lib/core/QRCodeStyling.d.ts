import { RequiredOptions } from "./QROptions";
import { Extension, QRCode, Options, DownloadOptions, ExtensionFunction } from "../types";
export default class QRCodeStyling {
    _options: RequiredOptions;
    _container?: HTMLElement;
    _canvas?: HTMLCanvasElement;
    _svg?: SVGElement;
    _qr?: QRCode;
    _extension?: ExtensionFunction;
    _canvasDrawingPromise?: Promise<void>;
    _svgDrawingPromise?: Promise<void>;
    constructor(options?: Partial<Options>);
    static _clearContainer(container?: HTMLElement): void;
    _setupSvg(): void;
    _setupCanvas(): void;
    _getElement(extension?: Extension): Promise<SVGElement | HTMLCanvasElement | undefined>;
    update(options?: Partial<Options>): void;
    append(container?: HTMLElement): void;
    applyExtension(extension: ExtensionFunction): void;
    getRawData(extension?: Extension): Promise<Blob | null>;
    download(downloadOptions?: Partial<DownloadOptions> | string): Promise<void>;
}
