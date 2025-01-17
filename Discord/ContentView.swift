//
//  ContentView.swift
//  Discord
//
//  Created by Austin Thomas on 24/11/2024.
//

import SwiftUI
import AppKit

struct ContentView: View {
    // *Analysis*: Add minimal logging or user guidance
    var body: some View {
        // If you wanted a small text area or overlay, you could do it here
        DiscordWindowContent(channelClickWidth: 1000)
            .onAppear {
                print("ContentView has appeared.")
            }
    }
}

struct DraggableView: NSViewRepresentable {
    func makeNSView(context: Context) -> NSView {
        let view = DragView()
        view.wantsLayer = true
        view.layer?.backgroundColor = .clear
        
        // Ensure the view is above others and can receive mouse events
        view.translatesAutoresizingMaskIntoConstraints = false
        view.layer?.zPosition = 999
        return view
    }
    
    func updateNSView(_ nsView: NSView, context: Context) {}
}

class DragView: NSView {
    // Allow dragging the window from this view
    override var mouseDownCanMoveWindow: Bool { true }
    
    override var allowsVibrancy: Bool { true }
    
    override func hitTest(_ point: NSPoint) -> NSView? {
        if let currentEvent = NSApplication.shared.currentEvent,
           currentEvent.type == .leftMouseDown ||
           (currentEvent.type == .leftMouseDragged && NSEvent.pressedMouseButtons == 1) {
            return self
        }
        // Pass through all other events
        return nil
    }
    
    override func mouseDown(with event: NSEvent) {
        window?.performDrag(with: event)
    }
}

struct VisualEffectView: NSViewRepresentable {
    let material: NSVisualEffectView.Material
    let blendingMode: NSVisualEffectView.BlendingMode
    
    func makeNSView(context: Context) -> NSVisualEffectView {
        let visualEffectView = NSVisualEffectView()
        visualEffectView.material = material
        visualEffectView.blendingMode = blendingMode
        return visualEffectView
    }

    func updateNSView(_ visualEffectView: NSVisualEffectView, context: Context) {
        visualEffectView.material = material
        visualEffectView.blendingMode = blendingMode
    }
}

#Preview {
    ContentView()
}
