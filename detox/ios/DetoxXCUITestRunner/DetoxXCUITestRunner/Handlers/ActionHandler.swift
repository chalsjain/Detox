//
//  ActionHandler.swift (DetoxXCUITestRunner)
//  Created by Asaf Korem (Wix.com) on 2024.
//

import Foundation
import XCTest

class ActionHandler {
    
    func findElement(from params: InvocationParams, predicateHandler: PredicateHandler) -> XCUIElement {
        
        let element = predicateHandler.findElement(using: params)

      let exists = element.waitForExistence(timeout: .defaultTimeout)
      DTXAssert(
        exists,
        "Action failed, element with matcher `\(params.matcherDescription)` does not exist"
      )
        return element;
    }
    
  func handle(from params: InvocationParams, predicateHandler: PredicateHandler) throws {
      
    guard let action = params.action else { return }
    switch action {
      case .tap:
        let element = findElement(from: params, predicateHandler: predicateHandler);
        element.tap()

      case .typeText:
        guard let text = params.params?.first else {
          throw Error.missingTypeTextParam
        }

        let element = findElement(from: params, predicateHandler: predicateHandler);
        element.typeTextOnEnd(text)

      case .replaceText:
        guard let text = params.params?.first else {
          throw Error.missingTypeTextParam
        }

        let element = findElement(from: params, predicateHandler: predicateHandler);
        element.replaceText(text)

      case .clearText:
        let element = findElement(from: params, predicateHandler: predicateHandler);
        element.clearText()
        
      case .coordinateTap:
        
        guard let x = Int(params.params?.first ?? "100"), let y = Int(params.params?[1] ?? "100") else {
            throw Error.missingTypeTextParam
        }
        
        do {
            // create the normalized vector:
            //let width = try XCUIApplication.appUnderTest().frame.width
            // ...
            let normalizedVector = CGVector(dx: 0, dy: 0)
            //let point = CGPoint(x: x,y: y)
            let normalized = try XCUIApplication.appUnderTest().coordinate(withNormalizedOffset: normalizedVector)
            
            //let normalized = webView.coordinate(withNormalizedOffset: CGVector(dx: 0, dy: 0))
            let coordinate = normalized.withOffset(CGVector(dx: x, dy: y))
            coordinate.tap()
            
            //coordinate.tap()
        } catch  {
            throw Error.failedToTapDeviceByCoordinates
        }
    }
  }
}

extension ActionHandler {
  enum Error: Swift.Error, LocalizedError {
    case missingTypeTextParam
    case failedToTapDeviceByCoordinates

    var errorDescription: String? {
      switch self {
        case .missingTypeTextParam:
          return "Missing text param for type action"
      case .failedToTapDeviceByCoordinates:
        return "Failed to perform tap action by coordinates"
      }
    }
  }
}
