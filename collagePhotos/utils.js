const loggerContainerEl = document.querySelector(".loggerContainer");

export const images = [
    { img: "images/photo1.jpg" },
    { img: "images/photo3.jpg" },
    { img: "images/photo4.jpg" },
    { img: "images/photo5.jpg" },
    { img: "images/photo6.jpg" },
    { img: "images/photo7.jpg" },
    { img: "images/photo8.jpg" },
    { img: "images/photo9.jpg" },
    { img: "images/photo10.jpg" }
];


export const THUMBNAIL_PARAMS = "w=240&h=240&fit=crop&auto=format";

export const CONSOLE_BASE_STYLES = [
    "font-size: 12px",
    "padding: 4px",
    "border: 2px solid #5a5a5a",
    "color: white",
].join(";");
export const CONSOLE_PRIMARY = [
    CONSOLE_BASE_STYLES,
    "background-color: #13315a",
].join(";");
export const CONSOLE_SUCCESS = [
    CONSOLE_BASE_STYLES,
    "background-color: #385a4e",
].join(";");
export const CONSOLE_ERROR = [
    CONSOLE_BASE_STYLES,
    "background-color: #5a1a24",
].join(";");

export const LAYOUT_4_COLUMNS = {
    name: "Layout 4 columns",
    columns: 4,
    itemWidth: 240,
    itemHeight: 240,
};
export const LAYOUT_8_COLUMNS = {
    name: "Layout 8 columns",
    columns: 8,
    itemWidth: 240,
    itemHeight: 240,
};
export const LAYOUTS = [LAYOUT_4_COLUMNS, LAYOUT_8_COLUMNS];

export const createImageFile = async (src) =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Failed to construct image."));
    });

export const loadImage = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(String(response.status));
        }

        return await response.blob();
    } catch (e) {
        console.log(`%cFETCHED_FAILED: ${e}`, CONSOLE_ERROR);
    }
};

export const weakRefCache = (fetchImg) => {
    const imgCache = new Map();
    const registry = new FinalizationRegistry(({ imgName, size, type }) => {
        const cachedImg = imgCache.get(imgName);
        if (cachedImg && !cachedImg.deref()) {
            imgCache.delete(imgName);
            console.log(
                `%cCLEANED_IMAGE: Url: ${imgName}, Size: ${size}, Type: ${type}`,
                CONSOLE_ERROR,
            );

            const logEl = document.createElement("div");
            logEl.classList.add("logger-item", "logger--error");
            logEl.innerHTML = `CLEANED_IMAGE: Url: ${imgName}, Size: ${size}, Type: ${type}`;
            loggerContainerEl.appendChild(logEl);
            loggerContainerEl.scrollTop = loggerContainerEl.scrollHeight;
        }
    });

    return async (imgName) => {
        const cachedImg = imgCache.get(imgName);

        if (cachedImg?.deref() !== undefined) {
            console.log(
                `%cCACHED_IMAGE: Url: ${imgName}, Size: ${cachedImg.size}, Type: ${cachedImg.type}`,
                CONSOLE_SUCCESS,
            );

            const logEl = document.createElement("div");
            logEl.classList.add("logger-item", "logger--success");
            logEl.innerHTML = `CACHED_IMAGE: Url: ${imgName}, Size: ${cachedImg.size}, Type: ${cachedImg.type}`;
            loggerContainerEl.appendChild(logEl);
            loggerContainerEl.scrollTop = loggerContainerEl.scrollHeight;

            return cachedImg?.deref();
        }

        const newImg = await fetchImg(imgName);
        console.log(
            `%cFETCHED_IMAGE: Url: ${imgName}, Size: ${newImg.size}, Type: ${newImg.type}`,
            CONSOLE_PRIMARY,
        );

        const logEl = document.createElement("div");
        logEl.classList.add("logger-item", "logger--primary");
        logEl.innerHTML = `FETCHED_IMAGE: Url: ${imgName}, Size: ${newImg.size}, Type: ${newImg.type}`;
        loggerContainerEl.appendChild(logEl);
        loggerContainerEl.scrollTop = loggerContainerEl.scrollHeight;

        imgCache.set(imgName, new WeakRef(newImg));
        registry.register(newImg, {
            imgName,
            size: newImg.size,
            type: newImg.type,
        });

        return newImg;
    };
};

export const stateObj = {
    loading: false,
    drawing: true,
    collageRendered: false,
    currentLayout: LAYOUTS[0],
    selectedImages: new Set(),
};