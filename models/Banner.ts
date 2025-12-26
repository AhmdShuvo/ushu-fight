import mongoose, { Schema, Document } from 'mongoose';

export interface IBanner extends Document {
    subTitle: string;
    title: string;
    innerTitle: string;
    description: string;
    backgroundImage: string;
    bannerThumb: string;
    widgetText: string;
    widgetTextCount: string;
    buttonText: string;
    buttonLink: string;
    elements: {
        element7: string;
        element26: string;
        element11: string;
        element12: string;
        element13: string;
        element10: string;
        element9: string;
    };
}

const BannerSchema: Schema = new Schema({
    subTitle: { type: String, required: true },
    title: { type: String, required: true },
    innerTitle: { type: String, required: true },
    description: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    bannerThumb: { type: String, required: true },
    widgetText: { type: String, required: true },
    widgetTextCount: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
    elements: {
        element7: { type: String },
        element26: { type: String },
        element11: { type: String },
        element12: { type: String },
        element13: { type: String },
        element10: { type: String },
        element9: { type: String },
    },
}, { timestamps: true });

export default mongoose.models.Banner || mongoose.model<IBanner>('Banner', BannerSchema);
