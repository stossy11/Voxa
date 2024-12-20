//
//  DiscordApp.swift
//  Discord
//
//  Created by Austin Thomas on 24/11/2024.
//

import SwiftUI
import AppKit

class WindowDelegate: NSObject, NSWindowDelegate {
    func windowDidResize(_ notification: Notification) {
        repositionTrafficLights(for: notification)
    }
    
    func windowDidEndLiveResize(_ notification: Notification) {
        repositionTrafficLights(for: notification)
    }
    
    func windowDidMove(_ notification: Notification) {
        repositionTrafficLights(for: notification)
    }
    
    func windowDidLayout(_ notification: Notification) {
        repositionTrafficLights(for: notification)
    }
    
    func windowDidBecomeKey(_ notification: Notification) {
        repositionTrafficLights(for: notification)
    }
    
    private func repositionTrafficLights(for notification: Notification) {
        guard let window = notification.object as? NSWindow else { return }
        
        // Ensure traffic lights are repositioned both immediately and after layout
        let repositionBlock = {
            // Make sure buttons are not hidden
            window.standardWindowButton(.closeButton)?.isHidden = false
            window.standardWindowButton(.miniaturizeButton)?.isHidden = false
            window.standardWindowButton(.zoomButton)?.isHidden = false
            
            // Position traffic lights
            window.standardWindowButton(.closeButton)?.setFrameOrigin(NSPoint(x: 10, y: -5))
            window.standardWindowButton(.miniaturizeButton)?.setFrameOrigin(NSPoint(x: 30, y: -5))
            window.standardWindowButton(.zoomButton)?.setFrameOrigin(NSPoint(x: 50, y: -5))
        }
        
        // Execute immediately
        repositionBlock()
        
        // And after a slight delay to catch any animation completions
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            repositionBlock()
        }
    }
}

@main
struct DiscordApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .onAppear {
                    if let window = NSApplication.shared.windows.first {
                        // Set a more standard initial window size
                        let screenFrame = NSScreen.main?.visibleFrame ?? .zero
                        let newWidth: CGFloat = 1000
                        let newHeight: CGFloat = 600
                        
                        // Center the window
                        let centeredX = screenFrame.midX - (newWidth / 2)
                        let centeredY = screenFrame.midY - (newHeight / 2)
                        
                        let initialFrame = NSRect(
                            x: centeredX,
                            y: centeredY,
                            width: newWidth,
                            height: newHeight
                        )
                        
                        window.setFrame(initialFrame, display: true)
                        
                        // Configure window for resizing
                        window.styleMask.insert(.resizable)
                        
                        // Set reasonable min and max sizes
                        window.minSize = NSSize(width: 600, height: 400)
                        window.maxSize = NSSize(width: 2000, height: screenFrame.height)
                        
                        // Disable window frame autosaving
                        window.setFrameAutosaveName("")
                        
                        // Set window delegate for traffic light positioning
                        window.delegate = appDelegate.windowDelegate
                    }
                }
        }
        .windowStyle(.hiddenTitleBar)
        .commands {
            CommandGroup(replacing: .windowArrangement) { }
        }
    }
}

class AppDelegate: NSObject, NSApplicationDelegate {
    let windowDelegate = WindowDelegate()
}
