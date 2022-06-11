console.log("JS Image Gallery ");

interface GalleryConfig {
    entry: string;
}

const gallery = (config: GalleryConfig ): HTMLElement => {
    console.log(config.entry);
    return document.createElement('div');
}

export { gallery };