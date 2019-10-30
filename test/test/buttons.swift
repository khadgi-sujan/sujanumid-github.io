//
//  buttons.swift
//  test
//
//  Created by Sujan Khadgi on 5/15/18.
//  Copyright © 2018 Sujan Khadgi. All rights reserved.
//

import UIKit

class buttons: UIButton{
    override func awakeFromNib() {
        super.awakeFromNib()
        layer.borderWidth = 1/UIScreen.main.nativeScale
        layer.borderColor = UIColor.purple.cgColor
    }
}
