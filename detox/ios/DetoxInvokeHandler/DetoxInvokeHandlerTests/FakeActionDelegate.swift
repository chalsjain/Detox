//
//  FakeActionDelegate.swift (DetoxInvokeHandler)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation

class FakeActionDelegate: ActionDelegateProtocol {
  struct Error: Swift.Error { }

  var shouldThrow: Bool = false

  var defaultImagePath: String!

  private var attributes: [[AnyHashable]: AnyCodable] = [:]

  private(set) var actRecorder: [(Action, AnyHashable)] = []

  func setAttributes(_ value: AnyCodable, for elements: [AnyHashable]) {
    attributes[elements] = value
  }

  func act(action: Action, on element: AnyHashable) throws {
    actRecorder.append((action, element))
    
    if shouldThrow {
      throw Error()
    }
  }

  func getAttributes(from elements: [AnyHashable]) throws -> AnyCodable {
    return attributes[elements]!
  }

  func takeScreenshot(
    _ imageName: String?,
    date: Date,
    of element: AnyHashable
  ) throws -> AnyCodable {
    return AnyCodable(imageName ?? defaultImagePath)
  }
}
