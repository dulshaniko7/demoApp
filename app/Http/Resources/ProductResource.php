<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'ProductName' => $this->ProductName,
            'price' => $this->price,
            'discount' => $this->discount,
            'description' => $this->description,
            'image' => $this->image,
        ];
    }
}
