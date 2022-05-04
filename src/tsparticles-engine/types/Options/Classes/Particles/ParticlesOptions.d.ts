import { AnimatableColor } from "../AnimatableColor";
import { AnimatableGradient } from "../AnimatableGradient";
import { Collisions } from "./Collisions/Collisions";
import { Destroy } from "./Destroy/Destroy";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { IParticlesOptions } from "../../Interfaces/Particles/IParticlesOptions";
import { Life } from "./Life/Life";
import { Links } from "./Links/Links";
import { Move } from "./Move/Move";
import { Opacity } from "./Opacity/Opacity";
import { Orbit } from "./Orbit/Orbit";
import { ParticlesBounce } from "./Bounce/ParticlesBounce";
import type { ParticlesGroups } from "../../../Types/ParticlesGroups";
import { ParticlesNumber } from "./Number/ParticlesNumber";
import { ParticlesRepulse } from "./Repulse/ParticlesRepulse";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { Roll } from "./Roll/Roll";
import { Rotate } from "./Rotate/Rotate";
import { Shadow } from "./Shadow";
import { Shape } from "./Shape/Shape";
import type { SingleOrMultiple } from "../../../Types/SingleOrMultiple";
import { Size } from "./Size/Size";
import { Stroke } from "./Stroke";
import { Tilt } from "./Tilt/Tilt";
import { Twinkle } from "./Twinkle/Twinkle";
import { Wobble } from "./Wobble/Wobble";
import { ZIndex } from "./ZIndex/ZIndex";
export declare class ParticlesOptions implements IParticlesOptions, IOptionLoader<IParticlesOptions> {
    bounce: ParticlesBounce;
    collisions: Collisions;
    color: AnimatableColor;
    destroy: Destroy;
    gradient: SingleOrMultiple<AnimatableGradient>;
    groups: ParticlesGroups;
    life: Life;
    links: Links;
    move: Move;
    number: ParticlesNumber;
    opacity: Opacity;
    orbit: Orbit;
    reduceDuplicates: boolean;
    repulse: ParticlesRepulse;
    roll: Roll;
    rotate: Rotate;
    shape: Shape;
    size: Size;
    shadow: Shadow;
    stroke: SingleOrMultiple<Stroke>;
    tilt: Tilt;
    twinkle: Twinkle;
    wobble: Wobble;
    zIndex: ZIndex;
    get line_linked(): Links;
    set line_linked(value: Links);
    get lineLinked(): Links;
    set lineLinked(value: Links);
    constructor();
    load(data?: RecursivePartial<IParticlesOptions>): void;
}
