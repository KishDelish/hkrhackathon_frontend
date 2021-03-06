var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./engine", "./Core/Interfaces/Colors", "./Core/Interfaces/Gradients", "./Core/Interfaces/IBounds", "./Core/Interfaces/IBubbleParticleData", "./Core/Interfaces/ICircleBouncer", "./Core/Interfaces/IContainerInteractivity", "./Core/Interfaces/IContainerPlugin", "./Core/Interfaces/ICoordinates", "./Core/Interfaces/IDelta", "./Core/Interfaces/IDimension", "./Core/Interfaces/IDistance", "./Core/Interfaces/IExternalInteractor", "./Core/Interfaces/IInteractor", "./Core/Interfaces/IMouseData", "./Core/Interfaces/IMovePathGenerator", "./Core/Interfaces/IParticle", "./Core/Interfaces/IParticleColorStyle", "./Core/Interfaces/IParticleGravity", "./Core/Interfaces/IParticleHslAnimation", "./Core/Interfaces/IParticlesInteractor", "./Core/Interfaces/IParticleLife", "./Core/Interfaces/IParticleLoops", "./Core/Interfaces/IParticleRetinaProps", "./Core/Interfaces/IParticleRoll", "./Core/Interfaces/IParticleUpdater", "./Core/Interfaces/IParticleValueAnimation", "./Core/Interfaces/IParticleWobble", "./Core/Interfaces/IParticlesMover", "./Core/Interfaces/IPlugin", "./Core/Interfaces/IRangeValue", "./Core/Interfaces/IRectSideResult", "./Core/Interfaces/IShapeDrawer", "./Core/Interfaces/IShapeValues", "./Core/Utils/Circle", "./Core/Utils/CircleWarp", "./Core/Utils/Constants", "./Core/Utils/EventListeners", "./Core/Utils/ExternalInteractorBase", "./Core/Utils/FrameManager", "./Core/Utils/InteractionManager", "./Core/Utils/ParticlesInteractorBase", "./Core/Utils/Plugins", "./Core/Utils/Point", "./Core/Utils/QuadTree", "./Core/Utils/Range", "./Core/Utils/Rectangle", "./Core/Utils/Vector", "./Core/Utils/Vector3d", "./Core/Canvas", "./Core/Container", "./Core/Loader", "./Core/Particle", "./Core/Particles", "./Core/Retina", "./Enums/Directions/MoveDirection", "./Enums/Directions/RotateDirection", "./Enums/Directions/OutModeDirection", "./Enums/Directions/TiltDirection", "./Enums/Modes/ClickMode", "./Enums/Modes/DestroyMode", "./Enums/Modes/DivMode", "./Enums/Modes/HoverMode", "./Enums/Modes/CollisionMode", "./Enums/Modes/OutMode", "./Enums/Modes/RollMode", "./Enums/Modes/SizeMode", "./Enums/Modes/ThemeMode", "./Enums/Modes/ResponsiveMode", "./Enums/Types/AlterType", "./Enums/Types/DestroyType", "./Enums/Types/GradientType", "./Enums/Types/InteractorType", "./Enums/Types/ParticleOutType", "./Enums/Types/StartValueType", "./Enums/Types/DivType", "./Enums/Types/EasingType", "./Enums/AnimationStatus", "./Enums/InteractivityDetect", "./Options/Classes/AnimatableColor", "./Options/Classes/AnimatableGradient", "./Options/Classes/AnimationOptions", "./Options/Classes/Background/Background", "./Options/Classes/BackgroundMask/BackgroundMask", "./Options/Classes/BackgroundMask/BackgroundMaskCover", "./Options/Classes/ColorAnimation", "./Options/Classes/FullScreen/FullScreen", "./Options/Classes/HslAnimation", "./Options/Classes/Interactivity/Events/ClickEvent", "./Options/Classes/Interactivity/Events/DivEvent", "./Options/Classes/Interactivity/Events/ClickEvent", "./Options/Classes/Interactivity/Events/DivEvent", "./Options/Classes/Interactivity/Events/Events", "./Options/Classes/Interactivity/Events/HoverEvent", "./Options/Classes/Interactivity/Events/Parallax", "./Options/Classes/Interactivity/Interactivity", "./Options/Classes/Interactivity/Modes/Attract", "./Options/Classes/Interactivity/Modes/Bounce", "./Options/Classes/Interactivity/Modes/Bubble", "./Options/Classes/Interactivity/Modes/BubbleBase", "./Options/Classes/Interactivity/Modes/BubbleDiv", "./Options/Classes/Interactivity/Modes/Connect", "./Options/Classes/Interactivity/Modes/ConnectLinks", "./Options/Classes/Interactivity/Modes/Grab", "./Options/Classes/Interactivity/Modes/GrabLinks", "./Options/Classes/Interactivity/Modes/Light", "./Options/Classes/Interactivity/Modes/LightArea", "./Options/Classes/Interactivity/Modes/LightGradient", "./Options/Classes/Interactivity/Modes/LightShadow", "./Options/Classes/Interactivity/Modes/Modes", "./Options/Classes/Interactivity/Modes/Push", "./Options/Classes/Interactivity/Modes/Remove", "./Options/Classes/Interactivity/Modes/Repulse", "./Options/Classes/Interactivity/Modes/RepulseBase", "./Options/Classes/Interactivity/Modes/RepulseDiv", "./Options/Classes/Interactivity/Modes/Slow", "./Options/Classes/Interactivity/Modes/Trail", "./Options/Classes/ManualParticle", "./Options/Classes/Motion/Motion", "./Options/Classes/Motion/MotionReduce", "./Options/Classes/Options", "./Options/Classes/OptionsColor", "./Options/Classes/Particles/Bounce/ParticlesBounce", "./Options/Classes/Particles/Bounce/ParticlesBounceFactor", "./Options/Classes/Particles/Collisions/Collisions", "./Options/Classes/Particles/Collisions/CollisionsOverlap", "./Options/Classes/Particles/Destroy/Destroy", "./Options/Classes/Particles/Destroy/Split", "./Options/Classes/Particles/Destroy/SplitFactor", "./Options/Classes/Particles/Destroy/SplitRate", "./Options/Classes/Particles/ParticlesOptions", "./Options/Classes/Particles/Shadow", "./Options/Classes/Particles/Stroke", "./Options/Classes/Particles/Life/Life", "./Options/Classes/Particles/Life/LifeDelay", "./Options/Classes/Particles/Life/LifeDuration", "./Options/Classes/Particles/Links/Links", "./Options/Classes/Particles/Links/LinksShadow", "./Options/Classes/Particles/Links/LinksTriangle", "./Options/Classes/Particles/Move/MoveAttract", "./Options/Classes/Particles/Move/Move", "./Options/Classes/Particles/Move/MoveAngle", "./Options/Classes/Particles/Move/MoveGravity", "./Options/Classes/Particles/Move/OutModes", "./Options/Classes/Particles/Move/Path/MovePath", "./Options/Classes/Particles/Move/Path/MovePathDelay", "./Options/Classes/Particles/Move/Spin", "./Options/Classes/Particles/Move/MoveTrail", "./Options/Classes/Particles/Number/ParticlesNumber", "./Options/Classes/Particles/Number/ParticlesDensity", "./Options/Classes/Particles/Opacity/Opacity", "./Options/Classes/Particles/Opacity/OpacityAnimation", "./Options/Classes/Particles/Orbit/Orbit", "./Options/Classes/Particles/Orbit/OrbitRotation", "./Options/Classes/Particles/Repulse/ParticlesRepulse", "./Options/Classes/Particles/Roll/Roll", "./Options/Classes/Particles/Roll/RollLight", "./Options/Classes/Particles/Rotate/Rotate", "./Options/Classes/Particles/Rotate/RotateAnimation", "./Options/Classes/Particles/Shape/Shape", "./Options/Classes/Particles/Size/Size", "./Options/Classes/Particles/Size/SizeAnimation", "./Options/Classes/Particles/Tilt/Tilt", "./Options/Classes/Particles/Tilt/TiltAnimation", "./Options/Classes/Particles/Twinkle/Twinkle", "./Options/Classes/Particles/Twinkle/TwinkleValues", "./Options/Classes/Particles/Wobble/Wobble", "./Options/Classes/Particles/ZIndex/ZIndex", "./Options/Classes/Responsive", "./Options/Classes/Theme/Theme", "./Options/Classes/Theme/ThemeDefault", "./Options/Classes/ValueWithRandom", "./Options/Interfaces/Background/IBackground", "./Options/Interfaces/BackgroundMask/IBackgroundMask", "./Options/Interfaces/BackgroundMask/IBackgroundMaskCover", "./Options/Interfaces/FullScreen/IFullScreen", "./Options/Interfaces/IAnimatable", "./Options/Interfaces/IAnimatableColor", "./Options/Interfaces/IAnimatableGradient", "./Options/Interfaces/IAnimation", "./Options/Interfaces/IColorAnimation", "./Options/Interfaces/IHslAnimation", "./Options/Interfaces/IManualParticle", "./Options/Interfaces/IOptionLoader", "./Options/Interfaces/IOptions", "./Options/Interfaces/IOptionsColor", "./Options/Interfaces/IOptionsGradient", "./Options/Interfaces/IResponsive", "./Options/Interfaces/IValueWithRandom", "./Options/Interfaces/Interactivity/Events/IClickEvent", "./Options/Interfaces/Interactivity/Events/IDivEvent", "./Options/Interfaces/Interactivity/Events/IEvents", "./Options/Interfaces/Interactivity/Events/IHoverEvent", "./Options/Interfaces/Interactivity/Events/IParallax", "./Options/Interfaces/Interactivity/Modes/IAttract", "./Options/Interfaces/Interactivity/Modes/IBounce", "./Options/Interfaces/Interactivity/Modes/IBubble", "./Options/Interfaces/Interactivity/Modes/IBubbleBase", "./Options/Interfaces/Interactivity/Modes/IBubbleDiv", "./Options/Interfaces/Interactivity/Modes/IConnect", "./Options/Interfaces/Interactivity/Modes/IConnectLinks", "./Options/Interfaces/Interactivity/Modes/IGrab", "./Options/Interfaces/Interactivity/Modes/IGrabLinks", "./Options/Interfaces/Interactivity/Modes/ILight", "./Options/Interfaces/Interactivity/Modes/ILightArea", "./Options/Interfaces/Interactivity/Modes/ILightGradient", "./Options/Interfaces/Interactivity/Modes/ILightShadow", "./Options/Interfaces/Interactivity/Modes/IModeDiv", "./Options/Interfaces/Interactivity/Modes/IModes", "./Options/Interfaces/Interactivity/Modes/IPush", "./Options/Interfaces/Interactivity/Modes/IRemove", "./Options/Interfaces/Interactivity/Modes/IRepulse", "./Options/Interfaces/Interactivity/Modes/IRepulseBase", "./Options/Interfaces/Interactivity/Modes/IRepulseDiv", "./Options/Interfaces/Interactivity/Modes/ISlow", "./Options/Interfaces/Interactivity/Modes/ITrail", "./Options/Interfaces/Interactivity/IInteractivity", "./Options/Interfaces/Motion/IMotion", "./Options/Interfaces/Motion/IMotionReduce", "./Options/Interfaces/Particles/Bounce/IParticlesBounce", "./Options/Interfaces/Particles/Collisions/ICollisions", "./Options/Interfaces/Particles/Collisions/ICollisionsOverlap", "./Options/Interfaces/Particles/Destroy/IDestroy", "./Options/Interfaces/Particles/Destroy/ISplit", "./Options/Interfaces/Particles/IParticlesOptions", "./Options/Interfaces/Particles/IShadow", "./Options/Interfaces/Particles/IStroke", "./Options/Interfaces/Particles/Life/ILife", "./Options/Interfaces/Particles/Life/ILifeDelay", "./Options/Interfaces/Particles/Life/ILifeDuration", "./Options/Interfaces/Particles/Links/ILinks", "./Options/Interfaces/Particles/Links/ILinksShadow", "./Options/Interfaces/Particles/Links/ILinksTriangle", "./Options/Interfaces/Particles/Move/IMoveAttract", "./Options/Interfaces/Particles/Move/IMove", "./Options/Interfaces/Particles/Move/IMoveAngle", "./Options/Interfaces/Particles/Move/IMoveGravity", "./Options/Interfaces/Particles/Move/Path/IMovePath", "./Options/Interfaces/Particles/Move/IOutModes", "./Options/Interfaces/Particles/Move/ISpin", "./Options/Interfaces/Particles/Move/IMoveTrail", "./Options/Interfaces/Particles/Number/IParticlesDensity", "./Options/Interfaces/Particles/Number/IParticlesNumber", "./Options/Interfaces/Particles/Opacity/IOpacity", "./Options/Interfaces/Particles/Opacity/IOpacityAnimation", "./Options/Interfaces/Particles/Orbit/IOrbit", "./Options/Interfaces/Particles/Repulse/IParticlesRepulse", "./Options/Interfaces/Particles/Roll/IRoll", "./Options/Interfaces/Particles/Roll/IRollLight", "./Options/Interfaces/Particles/Rotate/IRotate", "./Options/Interfaces/Particles/Rotate/IRotateAnimation", "./Options/Interfaces/Particles/Shape/ICharacterShape", "./Options/Interfaces/Particles/Shape/IImageShape", "./Options/Interfaces/Particles/Shape/IPolygonShape", "./Options/Interfaces/Particles/Shape/IShape", "./Options/Interfaces/Particles/Shape/IShapeValues", "./Options/Interfaces/Particles/Shape/IStarShape", "./Options/Interfaces/Particles/Size/ISize", "./Options/Interfaces/Particles/Size/ISizeAnimation", "./Options/Interfaces/Particles/Tilt/ITilt", "./Options/Interfaces/Particles/Tilt/ITiltAnimation", "./Options/Interfaces/Particles/Twinkle/ITwinkle", "./Options/Interfaces/Particles/Twinkle/ITwinkleValues", "./Options/Interfaces/Particles/Wobble/IWobble", "./Options/Interfaces/Particles/ZIndex/IZIndex", "./Options/Interfaces/Theme/ITheme", "./Options/Interfaces/Theme/IThemeDefault", "./Types/RangeValue", "./Types/RecursivePartial", "./Types/ShapeData", "./Types/ShapeDrawerFunctions", "./Types/SingleOrMultiple", "./Types/PathOptions", "./Utils/CanvasUtils", "./Utils/ColorUtils", "./Utils/NumberUtils", "./Utils/Utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tsParticles = exports.Main = exports.Engine = void 0;
    const engine_1 = require("./engine");
    Object.defineProperty(exports, "Engine", { enumerable: true, get: function () { return engine_1.Engine; } });
    Object.defineProperty(exports, "Main", { enumerable: true, get: function () { return engine_1.Engine; } });
    const tsParticles = new engine_1.Engine();
    exports.tsParticles = tsParticles;
    tsParticles.init();
    __exportStar(require("./Core/Interfaces/Colors"), exports);
    __exportStar(require("./Core/Interfaces/Gradients"), exports);
    __exportStar(require("./Core/Interfaces/IBounds"), exports);
    __exportStar(require("./Core/Interfaces/IBubbleParticleData"), exports);
    __exportStar(require("./Core/Interfaces/ICircleBouncer"), exports);
    __exportStar(require("./Core/Interfaces/IContainerInteractivity"), exports);
    __exportStar(require("./Core/Interfaces/IContainerPlugin"), exports);
    __exportStar(require("./Core/Interfaces/ICoordinates"), exports);
    __exportStar(require("./Core/Interfaces/IDelta"), exports);
    __exportStar(require("./Core/Interfaces/IDimension"), exports);
    __exportStar(require("./Core/Interfaces/IDistance"), exports);
    __exportStar(require("./Core/Interfaces/IExternalInteractor"), exports);
    __exportStar(require("./Core/Interfaces/IInteractor"), exports);
    __exportStar(require("./Core/Interfaces/IMouseData"), exports);
    __exportStar(require("./Core/Interfaces/IMovePathGenerator"), exports);
    __exportStar(require("./Core/Interfaces/IParticle"), exports);
    __exportStar(require("./Core/Interfaces/IParticleColorStyle"), exports);
    __exportStar(require("./Core/Interfaces/IParticleGravity"), exports);
    __exportStar(require("./Core/Interfaces/IParticleHslAnimation"), exports);
    __exportStar(require("./Core/Interfaces/IParticlesInteractor"), exports);
    __exportStar(require("./Core/Interfaces/IParticleLife"), exports);
    __exportStar(require("./Core/Interfaces/IParticleLoops"), exports);
    __exportStar(require("./Core/Interfaces/IParticleRetinaProps"), exports);
    __exportStar(require("./Core/Interfaces/IParticleRoll"), exports);
    __exportStar(require("./Core/Interfaces/IParticleUpdater"), exports);
    __exportStar(require("./Core/Interfaces/IParticleValueAnimation"), exports);
    __exportStar(require("./Core/Interfaces/IParticleWobble"), exports);
    __exportStar(require("./Core/Interfaces/IParticlesMover"), exports);
    __exportStar(require("./Core/Interfaces/IPlugin"), exports);
    __exportStar(require("./Core/Interfaces/IRangeValue"), exports);
    __exportStar(require("./Core/Interfaces/IRectSideResult"), exports);
    __exportStar(require("./Core/Interfaces/IShapeDrawer"), exports);
    __exportStar(require("./Core/Interfaces/IShapeValues"), exports);
    __exportStar(require("./Core/Utils/Circle"), exports);
    __exportStar(require("./Core/Utils/CircleWarp"), exports);
    __exportStar(require("./Core/Utils/Constants"), exports);
    __exportStar(require("./Core/Utils/EventListeners"), exports);
    __exportStar(require("./Core/Utils/ExternalInteractorBase"), exports);
    __exportStar(require("./Core/Utils/FrameManager"), exports);
    __exportStar(require("./Core/Utils/InteractionManager"), exports);
    __exportStar(require("./Core/Utils/ParticlesInteractorBase"), exports);
    __exportStar(require("./Core/Utils/Plugins"), exports);
    __exportStar(require("./Core/Utils/Point"), exports);
    __exportStar(require("./Core/Utils/QuadTree"), exports);
    __exportStar(require("./Core/Utils/Range"), exports);
    __exportStar(require("./Core/Utils/Rectangle"), exports);
    __exportStar(require("./Core/Utils/Vector"), exports);
    __exportStar(require("./Core/Utils/Vector3d"), exports);
    __exportStar(require("./Core/Canvas"), exports);
    __exportStar(require("./Core/Container"), exports);
    __exportStar(require("./Core/Loader"), exports);
    __exportStar(require("./Core/Particle"), exports);
    __exportStar(require("./Core/Particles"), exports);
    __exportStar(require("./Core/Retina"), exports);
    __exportStar(require("./Enums/Directions/MoveDirection"), exports);
    __exportStar(require("./Enums/Directions/RotateDirection"), exports);
    __exportStar(require("./Enums/Directions/OutModeDirection"), exports);
    __exportStar(require("./Enums/Directions/TiltDirection"), exports);
    __exportStar(require("./Enums/Modes/ClickMode"), exports);
    __exportStar(require("./Enums/Modes/DestroyMode"), exports);
    __exportStar(require("./Enums/Modes/DivMode"), exports);
    __exportStar(require("./Enums/Modes/HoverMode"), exports);
    __exportStar(require("./Enums/Modes/CollisionMode"), exports);
    __exportStar(require("./Enums/Modes/OutMode"), exports);
    __exportStar(require("./Enums/Modes/RollMode"), exports);
    __exportStar(require("./Enums/Modes/SizeMode"), exports);
    __exportStar(require("./Enums/Modes/ThemeMode"), exports);
    __exportStar(require("./Enums/Modes/ResponsiveMode"), exports);
    __exportStar(require("./Enums/Types/AlterType"), exports);
    __exportStar(require("./Enums/Types/DestroyType"), exports);
    __exportStar(require("./Enums/Types/GradientType"), exports);
    __exportStar(require("./Enums/Types/InteractorType"), exports);
    __exportStar(require("./Enums/Types/ParticleOutType"), exports);
    __exportStar(require("./Enums/Types/StartValueType"), exports);
    __exportStar(require("./Enums/Types/DivType"), exports);
    __exportStar(require("./Enums/Types/EasingType"), exports);
    __exportStar(require("./Enums/AnimationStatus"), exports);
    __exportStar(require("./Enums/InteractivityDetect"), exports);
    __exportStar(require("./Options/Classes/AnimatableColor"), exports);
    __exportStar(require("./Options/Classes/AnimatableGradient"), exports);
    __exportStar(require("./Options/Classes/AnimationOptions"), exports);
    __exportStar(require("./Options/Classes/Background/Background"), exports);
    __exportStar(require("./Options/Classes/BackgroundMask/BackgroundMask"), exports);
    __exportStar(require("./Options/Classes/BackgroundMask/BackgroundMaskCover"), exports);
    __exportStar(require("./Options/Classes/ColorAnimation"), exports);
    __exportStar(require("./Options/Classes/FullScreen/FullScreen"), exports);
    __exportStar(require("./Options/Classes/HslAnimation"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Events/ClickEvent"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Events/DivEvent"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Events/ClickEvent"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Events/DivEvent"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Events/Events"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Events/HoverEvent"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Events/Parallax"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Interactivity"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Attract"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Bounce"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Bubble"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/BubbleBase"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/BubbleDiv"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Connect"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/ConnectLinks"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Grab"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/GrabLinks"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Light"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/LightArea"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/LightGradient"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/LightShadow"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Modes"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Push"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Remove"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Repulse"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/RepulseBase"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/RepulseDiv"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Slow"), exports);
    __exportStar(require("./Options/Classes/Interactivity/Modes/Trail"), exports);
    __exportStar(require("./Options/Classes/ManualParticle"), exports);
    __exportStar(require("./Options/Classes/Motion/Motion"), exports);
    __exportStar(require("./Options/Classes/Motion/MotionReduce"), exports);
    __exportStar(require("./Options/Classes/Options"), exports);
    __exportStar(require("./Options/Classes/OptionsColor"), exports);
    __exportStar(require("./Options/Classes/Particles/Bounce/ParticlesBounce"), exports);
    __exportStar(require("./Options/Classes/Particles/Bounce/ParticlesBounceFactor"), exports);
    __exportStar(require("./Options/Classes/Particles/Collisions/Collisions"), exports);
    __exportStar(require("./Options/Classes/Particles/Collisions/CollisionsOverlap"), exports);
    __exportStar(require("./Options/Classes/Particles/Destroy/Destroy"), exports);
    __exportStar(require("./Options/Classes/Particles/Destroy/Split"), exports);
    __exportStar(require("./Options/Classes/Particles/Destroy/SplitFactor"), exports);
    __exportStar(require("./Options/Classes/Particles/Destroy/SplitRate"), exports);
    __exportStar(require("./Options/Classes/Particles/ParticlesOptions"), exports);
    __exportStar(require("./Options/Classes/Particles/Shadow"), exports);
    __exportStar(require("./Options/Classes/Particles/Stroke"), exports);
    __exportStar(require("./Options/Classes/Particles/Life/Life"), exports);
    __exportStar(require("./Options/Classes/Particles/Life/LifeDelay"), exports);
    __exportStar(require("./Options/Classes/Particles/Life/LifeDuration"), exports);
    __exportStar(require("./Options/Classes/Particles/Links/Links"), exports);
    __exportStar(require("./Options/Classes/Particles/Links/LinksShadow"), exports);
    __exportStar(require("./Options/Classes/Particles/Links/LinksTriangle"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/MoveAttract"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/Move"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/MoveAngle"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/MoveGravity"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/OutModes"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/Path/MovePath"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/Path/MovePathDelay"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/Spin"), exports);
    __exportStar(require("./Options/Classes/Particles/Move/MoveTrail"), exports);
    __exportStar(require("./Options/Classes/Particles/Number/ParticlesNumber"), exports);
    __exportStar(require("./Options/Classes/Particles/Number/ParticlesDensity"), exports);
    __exportStar(require("./Options/Classes/Particles/Opacity/Opacity"), exports);
    __exportStar(require("./Options/Classes/Particles/Opacity/OpacityAnimation"), exports);
    __exportStar(require("./Options/Classes/Particles/Orbit/Orbit"), exports);
    __exportStar(require("./Options/Classes/Particles/Orbit/OrbitRotation"), exports);
    __exportStar(require("./Options/Classes/Particles/Repulse/ParticlesRepulse"), exports);
    __exportStar(require("./Options/Classes/Particles/Roll/Roll"), exports);
    __exportStar(require("./Options/Classes/Particles/Roll/RollLight"), exports);
    __exportStar(require("./Options/Classes/Particles/Rotate/Rotate"), exports);
    __exportStar(require("./Options/Classes/Particles/Rotate/RotateAnimation"), exports);
    __exportStar(require("./Options/Classes/Particles/Shape/Shape"), exports);
    __exportStar(require("./Options/Classes/Particles/Size/Size"), exports);
    __exportStar(require("./Options/Classes/Particles/Size/SizeAnimation"), exports);
    __exportStar(require("./Options/Classes/Particles/Tilt/Tilt"), exports);
    __exportStar(require("./Options/Classes/Particles/Tilt/TiltAnimation"), exports);
    __exportStar(require("./Options/Classes/Particles/Twinkle/Twinkle"), exports);
    __exportStar(require("./Options/Classes/Particles/Twinkle/TwinkleValues"), exports);
    __exportStar(require("./Options/Classes/Particles/Wobble/Wobble"), exports);
    __exportStar(require("./Options/Classes/Particles/ZIndex/ZIndex"), exports);
    __exportStar(require("./Options/Classes/Responsive"), exports);
    __exportStar(require("./Options/Classes/Theme/Theme"), exports);
    __exportStar(require("./Options/Classes/Theme/ThemeDefault"), exports);
    __exportStar(require("./Options/Classes/ValueWithRandom"), exports);
    __exportStar(require("./Options/Interfaces/Background/IBackground"), exports);
    __exportStar(require("./Options/Interfaces/BackgroundMask/IBackgroundMask"), exports);
    __exportStar(require("./Options/Interfaces/BackgroundMask/IBackgroundMaskCover"), exports);
    __exportStar(require("./Options/Interfaces/FullScreen/IFullScreen"), exports);
    __exportStar(require("./Options/Interfaces/IAnimatable"), exports);
    __exportStar(require("./Options/Interfaces/IAnimatableColor"), exports);
    __exportStar(require("./Options/Interfaces/IAnimatableGradient"), exports);
    __exportStar(require("./Options/Interfaces/IAnimation"), exports);
    __exportStar(require("./Options/Interfaces/IColorAnimation"), exports);
    __exportStar(require("./Options/Interfaces/IHslAnimation"), exports);
    __exportStar(require("./Options/Interfaces/IManualParticle"), exports);
    __exportStar(require("./Options/Interfaces/IOptionLoader"), exports);
    __exportStar(require("./Options/Interfaces/IOptions"), exports);
    __exportStar(require("./Options/Interfaces/IOptionsColor"), exports);
    __exportStar(require("./Options/Interfaces/IOptionsGradient"), exports);
    __exportStar(require("./Options/Interfaces/IResponsive"), exports);
    __exportStar(require("./Options/Interfaces/IValueWithRandom"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Events/IClickEvent"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Events/IDivEvent"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Events/IEvents"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Events/IHoverEvent"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Events/IParallax"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IAttract"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IBounce"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IBubble"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IBubbleBase"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IBubbleDiv"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IConnect"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IConnectLinks"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IGrab"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IGrabLinks"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/ILight"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/ILightArea"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/ILightGradient"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/ILightShadow"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IModeDiv"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IModes"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IPush"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IRemove"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IRepulse"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IRepulseBase"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/IRepulseDiv"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/ISlow"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/Modes/ITrail"), exports);
    __exportStar(require("./Options/Interfaces/Interactivity/IInteractivity"), exports);
    __exportStar(require("./Options/Interfaces/Motion/IMotion"), exports);
    __exportStar(require("./Options/Interfaces/Motion/IMotionReduce"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Bounce/IParticlesBounce"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Collisions/ICollisions"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Collisions/ICollisionsOverlap"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Destroy/IDestroy"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Destroy/ISplit"), exports);
    __exportStar(require("./Options/Interfaces/Particles/IParticlesOptions"), exports);
    __exportStar(require("./Options/Interfaces/Particles/IShadow"), exports);
    __exportStar(require("./Options/Interfaces/Particles/IStroke"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Life/ILife"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Life/ILifeDelay"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Life/ILifeDuration"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Links/ILinks"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Links/ILinksShadow"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Links/ILinksTriangle"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/IMoveAttract"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/IMove"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/IMoveAngle"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/IMoveGravity"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/Path/IMovePath"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/IOutModes"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/ISpin"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Move/IMoveTrail"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Number/IParticlesDensity"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Number/IParticlesNumber"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Opacity/IOpacity"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Opacity/IOpacityAnimation"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Orbit/IOrbit"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Repulse/IParticlesRepulse"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Roll/IRoll"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Roll/IRollLight"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Rotate/IRotate"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Rotate/IRotateAnimation"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Shape/ICharacterShape"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Shape/IImageShape"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Shape/IPolygonShape"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Shape/IShape"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Shape/IShapeValues"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Shape/IStarShape"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Size/ISize"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Size/ISizeAnimation"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Tilt/ITilt"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Tilt/ITiltAnimation"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Twinkle/ITwinkle"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Twinkle/ITwinkleValues"), exports);
    __exportStar(require("./Options/Interfaces/Particles/Wobble/IWobble"), exports);
    __exportStar(require("./Options/Interfaces/Particles/ZIndex/IZIndex"), exports);
    __exportStar(require("./Options/Interfaces/Theme/ITheme"), exports);
    __exportStar(require("./Options/Interfaces/Theme/IThemeDefault"), exports);
    __exportStar(require("./Types/RangeValue"), exports);
    __exportStar(require("./Types/RecursivePartial"), exports);
    __exportStar(require("./Types/ShapeData"), exports);
    __exportStar(require("./Types/ShapeDrawerFunctions"), exports);
    __exportStar(require("./Types/SingleOrMultiple"), exports);
    __exportStar(require("./Types/PathOptions"), exports);
    __exportStar(require("./Utils/CanvasUtils"), exports);
    __exportStar(require("./Utils/ColorUtils"), exports);
    __exportStar(require("./Utils/NumberUtils"), exports);
    __exportStar(require("./Utils/Utils"), exports);
});
