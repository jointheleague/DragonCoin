import React, {useMemo} from 'react';
import {IPlayer} from '../../../state/types';
import * as PIXI from 'pixi.js-legacy'
import {AnimatedSprite} from '../AnimatedSprite';
import fireball1 from "./sprites/tile000.png";
import fireball2 from "./sprites/tile001.png";
import fireball3 from "./sprites/tile002.png";
import fireball4 from "./sprites/tile003.png";

import {
  CustomPIXIComponent,
} from "react-pixi-fiber";

interface IProps {
    key: string;
    player: IPlayer;
}

const ANIMATION_SPEED = 0.08;

export const Fireball = (props: IProps) => {
    
  const fireballTextures = useMemo(() => {
    //Create textures from spites
    let fireballImages = [fireball1,fireball2,fireball3, fireball4];
    let textures: PIXI.AnimatedSprite["textures"] = [];
    fireballImages.forEach(image =>{
      let texture = PIXI.Texture.from(image);
       textures.push(texture);
    });
    return textures;
  }, []);

  return (
    <>
      <AnimatedSprite
      anchor={new PIXI.Point(0.5, 0.5)}
      width ={100}
      height = {100}
      textures = {fireballTextures}
      rotation={props.player.angle+Math.PI}
      x={props.player.x}
      animationSpeed={ANIMATION_SPEED}
      loop= {true}
      y={props.player.y}
      />
      
    </>
  )
}